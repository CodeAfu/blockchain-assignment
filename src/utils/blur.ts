// Generate a simple colored blur placeholder
export const generateBlurDataURL = (color: string = "#f3f4f6") => {
  const svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="${color}"/>
    </svg>
  `;

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
};

// Generate a gradient blur placeholder
export const generateGradientBlur = (color1: string = "#e5e7eb", color2: string = "#f9fafb") => {
  const svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" fill="url(#grad)"/>
    </svg>
  `;

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
};

// Shimmer effect (like Facebook/Instagram)
export const shimmerBlur = () => {
  const svg = `
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f6f7f8;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#edeef1;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f6f7f8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" fill="url(#shimmer)">
        <animate attributeName="x" values="-40;40;-40" dur="1.5s" repeatCount="indefinite"/>
      </rect>
    </svg>
  `;

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
};

// For client-side only - generate blur from image colors
export const getImageAverageColor = async (imageUrl: string): Promise<string> => {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 1;
      canvas.height = 1;

      ctx?.drawImage(img, 0, 0, 1, 1);
      const imageData = ctx?.getImageData(0, 0, 1, 1);

      if (imageData) {
        const [r, g, b] = imageData.data;
        resolve(`rgb(${r}, ${g}, ${b})`);
      } else {
        resolve("#f3f4f6");
      }
    };

    img.onerror = () => resolve("#f3f4f6");
    img.src = imageUrl;
  });
};
