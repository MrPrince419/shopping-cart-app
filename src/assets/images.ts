// Base64 encoded simple SVG images
export const headphones = `data:image/svg+xml;base64,${btoa(`
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#F3F4F6"/>
  <path d="M70 100C70 80 85 65 100 65C115 65 130 80 130 100" stroke="#4B5563" stroke-width="8"/>
  <circle cx="65" cy="120" r="15" fill="#4B5563"/>
  <circle cx="135" cy="120" r="15" fill="#4B5563"/>
</svg>
`)}`;

export const smartwatch = `data:image/svg+xml;base64,${btoa(`
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#F3F4F6"/>
  <rect x="70" y="60" width="60" height="80" rx="10" fill="#4B5563"/>
  <rect x="80" y="70" width="40" height="60" rx="5" fill="#F3F4F6"/>
</svg>
`)}`;

export const speaker = `data:image/svg+xml;base64,${btoa(`
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#F3F4F6"/>
  <rect x="60" y="50" width="80" height="100" rx="10" fill="#4B5563"/>
  <circle cx="100" cy="80" r="15" fill="#F3F4F6"/>
  <circle cx="100" cy="120" r="20" fill="#F3F4F6"/>
</svg>
`)}`;

export default {
  headphones,
  smartwatch,
  speaker,
};
