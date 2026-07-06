import JSZip from "jszip";

export const FORMATS = [
  { id: "image/jpeg", label: "JPEG", ext: "jpg"  },
  { id: "image/png",  label: "PNG",  ext: "png"  },
  { id: "image/webp", label: "WebP", ext: "webp" },
];

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function dataUrlBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] ?? "";
  return Math.round(base64.length * 0.75);
}

export function loadImageMeta(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      const img = new Image();
      img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = reject;
      img.src = src;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function resizeImage(src, width, height, format, quality) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(width));
      canvas.height = Math.max(1, Math.round(height));
      const ctx = canvas.getContext("2d");
      if (format === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL(format, quality));
    };
    img.onerror = reject;
    img.src = src;
  });
}

// Binary-search quality to hit a target byte count (JPEG/WebP).
// Falls back to dimension scaling if quality alone can't reach the target.
export async function resizeToTargetSize(src, origWidth, origHeight, format, targetBytes) {
  if (format === "image/png") {
    // PNG is lossless — scale dimensions down until under target
    let scale = 1;
    for (let i = 0; i < 16; i++) {
      const w = Math.max(1, Math.round(origWidth * scale));
      const h = Math.max(1, Math.round(origHeight * scale));
      const dataUrl = await resizeImage(src, w, h, format, 1);
      if (dataUrlBytes(dataUrl) <= targetBytes) return { dataUrl, width: w, height: h };
      scale *= 0.75;
    }
    return null;
  }

  // JPEG / WebP — binary search on quality at original dims
  let lo = 1, hi = 100, bestResult = null;
  for (let i = 0; i < 8; i++) {
    const mid = Math.floor((lo + hi) / 2);
    const dataUrl = await resizeImage(src, origWidth, origHeight, format, mid / 100);
    if (dataUrlBytes(dataUrl) <= targetBytes) {
      bestResult = { dataUrl, width: origWidth, height: origHeight };
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  if (bestResult) return bestResult;

  // Still too large — also reduce dimensions
  let scale = 0.8;
  for (let i = 0; i < 12; i++) {
    const w = Math.max(1, Math.round(origWidth * scale));
    const h = Math.max(1, Math.round(origHeight * scale));
    const dataUrl = await resizeImage(src, w, h, format, 0.7);
    if (dataUrlBytes(dataUrl) <= targetBytes) return { dataUrl, width: w, height: h };
    scale *= 0.75;
  }

  return null; // target unreachable
}

export function downloadDataUrl(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

export async function downloadAsZip(items) {
  const zip = new JSZip();
  for (const { name, result } of items) {
    if (!result) continue;
    const base64 = result.dataUrl.split(",")[1];
    const ext = FORMATS.find((f) => f.id === result.format)?.ext ?? "jpg";
    zip.file(`${name.replace(/\.[^.]+$/, "")}-resized.${ext}`, base64, { base64: true });
  }
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "resized-images.zip";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
