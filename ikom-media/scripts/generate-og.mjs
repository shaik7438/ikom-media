/**
 * Generates /public/og-image.png (1200×630) used for social sharing previews.
 * Run: npm run og
 *
 * PLACEHOLDER: uses a text wordmark. Once the official logo is available, either replace
 * public/og-image.png with a designed image, or composite the logo here.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.82" cy="0.2" r="0.7">
      <stop offset="0" stop-color="#343BFF" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#343BFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="core" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#c7d0ff"/>
      <stop offset="0.4" stop-color="#5D72FF"/>
      <stop offset="1" stop-color="#111747"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#080B18"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(960 300)">
    <polygon points="0,-170 147,-85 147,85 0,170 -147,85 -147,-85" fill="url(#core)"/>
    <polygon points="0,170 -147,85 0,0" fill="#000" opacity="0.28"/>
    <polygon points="147,85 0,170 0,0" fill="#000" opacity="0.18"/>
    <polygon points="0,-170 147,-85 0,0" fill="#fff" opacity="0.16"/>
    <ellipse rx="250" ry="80" fill="none" stroke="#d7dcf0" stroke-opacity="0.7" stroke-width="5" transform="rotate(-18)"/>
  </g>
  <text x="80" y="120" font-family="Inter Display, Inter, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1.5">IKom <tspan fill="#93a2ff" font-weight="600">Media</tspan></text>
  <text x="80" y="290" font-family="Inter Display, Inter, sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-2">We Build Brands</text>
  <text x="80" y="366" font-family="Inter Display, Inter, sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-2">That Get Noticed.</text>
  <text x="80" y="520" font-family="Inter, sans-serif" font-size="26" font-weight="500" fill="#B9C1D9">Social Media · Performance Marketing · Websites · SEO · Branding</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "og-image.png"));
console.log("✓ public/og-image.png");
