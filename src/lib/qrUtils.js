import QRCode from "qrcode";

export const ERROR_LEVELS = [
  { id: "L", label: "Low (7%)" },
  { id: "M", label: "Medium (15%)" },
  { id: "Q", label: "Quartile (25%)" },
  { id: "H", label: "High (30%)" },
];

export async function generateQrDataUrl(text, { errorLevel = "M", size = 512 } = {}) {
  return QRCode.toDataURL(text, {
    width: size,
    margin: 2,
    errorCorrectionLevel: errorLevel,
    color: { dark: "#000000", light: "#ffffff" },
  });
}
