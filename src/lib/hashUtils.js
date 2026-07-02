// MD5 constants derived from sin table (RFC 1321)
const _T = Array.from({ length: 65 }, (_, i) =>
  (Math.floor(Math.abs(Math.sin(i)) * 0x100000000)) | 0
);

function _md5(str) {
  const add = (x, y) => (x + y) | 0;
  const rol = (n, c) => (n << c) | (n >>> (32 - c));
  const cmn = (q, a, b, x, s, t) => add(rol(add(add(a, q), add(x, t)), s), b);
  const ff = (a, b, c, d, x, s, t) => cmn((b & c) | (~b & d), a, b, x, s, t);
  const gg = (a, b, c, d, x, s, t) => cmn((b & d) | (c & ~d), a, b, x, s, t);
  const hh = (a, b, c, d, x, s, t) => cmn(b ^ c ^ d, a, b, x, s, t);
  const ii = (a, b, c, d, x, s, t) => cmn(c ^ (b | ~d), a, b, x, s, t);

  const bytes = new TextEncoder().encode(str);
  const n = bytes.length;
  const blockCount = ((n + 8) >> 6) + 1;
  const words = new Int32Array(blockCount * 16);

  for (let i = 0; i < n; i++) {
    words[i >> 2] |= bytes[i] << ((i & 3) << 3);
  }
  words[n >> 2] |= 0x80 << ((n & 3) << 3);
  words[blockCount * 16 - 2] = n << 3;

  let a = 0x67452301, b = 0xefcdab89 | 0, c = 0x98badcfe | 0, d = 0x10325476;

  for (let i = 0; i < blockCount * 16; i += 16) {
    const M = (j) => words[i + j];
    const oa = a, ob = b, oc = c, od = d;

    a = ff(a,b,c,d,M(0),7,_T[1]);   d = ff(d,a,b,c,M(1),12,_T[2]);
    c = ff(c,d,a,b,M(2),17,_T[3]);  b = ff(b,c,d,a,M(3),22,_T[4]);
    a = ff(a,b,c,d,M(4),7,_T[5]);   d = ff(d,a,b,c,M(5),12,_T[6]);
    c = ff(c,d,a,b,M(6),17,_T[7]);  b = ff(b,c,d,a,M(7),22,_T[8]);
    a = ff(a,b,c,d,M(8),7,_T[9]);   d = ff(d,a,b,c,M(9),12,_T[10]);
    c = ff(c,d,a,b,M(10),17,_T[11]);b = ff(b,c,d,a,M(11),22,_T[12]);
    a = ff(a,b,c,d,M(12),7,_T[13]); d = ff(d,a,b,c,M(13),12,_T[14]);
    c = ff(c,d,a,b,M(14),17,_T[15]);b = ff(b,c,d,a,M(15),22,_T[16]);

    a = gg(a,b,c,d,M(1),5,_T[17]);  d = gg(d,a,b,c,M(6),9,_T[18]);
    c = gg(c,d,a,b,M(11),14,_T[19]);b = gg(b,c,d,a,M(0),20,_T[20]);
    a = gg(a,b,c,d,M(5),5,_T[21]);  d = gg(d,a,b,c,M(10),9,_T[22]);
    c = gg(c,d,a,b,M(15),14,_T[23]);b = gg(b,c,d,a,M(4),20,_T[24]);
    a = gg(a,b,c,d,M(9),5,_T[25]);  d = gg(d,a,b,c,M(14),9,_T[26]);
    c = gg(c,d,a,b,M(3),14,_T[27]); b = gg(b,c,d,a,M(8),20,_T[28]);
    a = gg(a,b,c,d,M(13),5,_T[29]); d = gg(d,a,b,c,M(2),9,_T[30]);
    c = gg(c,d,a,b,M(7),14,_T[31]); b = gg(b,c,d,a,M(12),20,_T[32]);

    a = hh(a,b,c,d,M(5),4,_T[33]);  d = hh(d,a,b,c,M(8),11,_T[34]);
    c = hh(c,d,a,b,M(11),16,_T[35]);b = hh(b,c,d,a,M(14),23,_T[36]);
    a = hh(a,b,c,d,M(1),4,_T[37]);  d = hh(d,a,b,c,M(4),11,_T[38]);
    c = hh(c,d,a,b,M(7),16,_T[39]); b = hh(b,c,d,a,M(10),23,_T[40]);
    a = hh(a,b,c,d,M(13),4,_T[41]); d = hh(d,a,b,c,M(0),11,_T[42]);
    c = hh(c,d,a,b,M(3),16,_T[43]); b = hh(b,c,d,a,M(6),23,_T[44]);
    a = hh(a,b,c,d,M(9),4,_T[45]);  d = hh(d,a,b,c,M(12),11,_T[46]);
    c = hh(c,d,a,b,M(15),16,_T[47]);b = hh(b,c,d,a,M(2),23,_T[48]);

    a = ii(a,b,c,d,M(0),6,_T[49]);  d = ii(d,a,b,c,M(7),10,_T[50]);
    c = ii(c,d,a,b,M(14),15,_T[51]);b = ii(b,c,d,a,M(5),21,_T[52]);
    a = ii(a,b,c,d,M(12),6,_T[53]); d = ii(d,a,b,c,M(3),10,_T[54]);
    c = ii(c,d,a,b,M(10),15,_T[55]);b = ii(b,c,d,a,M(1),21,_T[56]);
    a = ii(a,b,c,d,M(8),6,_T[57]);  d = ii(d,a,b,c,M(15),10,_T[58]);
    c = ii(c,d,a,b,M(6),15,_T[59]); b = ii(b,c,d,a,M(13),21,_T[60]);
    a = ii(a,b,c,d,M(4),6,_T[61]);  d = ii(d,a,b,c,M(11),10,_T[62]);
    c = ii(c,d,a,b,M(2),15,_T[63]); b = ii(b,c,d,a,M(9),21,_T[64]);

    a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
  }

  const toHex = (n) => {
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += ((n >>> (i * 8)) & 0xff).toString(16).padStart(2, "0");
    }
    return s;
  };

  return toHex(a) + toHex(b) + toHex(c) + toHex(d);
}

async function _sha(text, algorithm) {
  const data = new TextEncoder().encode(text);
  const buffer = await crypto.subtle.digest(algorithm, data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const HASH_ALGORITHMS = ["MD5", "SHA-1", "SHA-256", "SHA-512"];

export async function generateHash(text, algorithm) {
  if (algorithm === "MD5") return _md5(text);
  return _sha(text, algorithm);
}

export async function generateAllHashes(text) {
  const results = await Promise.all(
    HASH_ALGORITHMS.map(async (alg) => [alg, await generateHash(text, alg)])
  );
  return Object.fromEntries(results);
}
