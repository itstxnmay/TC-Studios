/**
 * Optimizes external images using a free global CDN (wsrv.nl).
 * This enables on-the-fly resizing, compression, and WebP conversion.
 * 
 * @param url The source image URL
 * @param width The desired width in pixels (defaults to 1200 for Retina crispness)
 * @param quality The compression quality (0-100, defaults to 90 for premium fidelity)
 * @returns The optimized image URL
 */
export const optimizeImage = (url: string, width: number = 1200, quality: number = 90) => {
    if (!url) return '';
    
    // Check if it's already an optimized URL or a local/data asset
    if (
      url.startsWith('data:') || 
      url.startsWith('blob:') || 
      url.includes('wsrv.nl')
    ) {
      return url;
    }
  
    // Remove protocol for cleaner passing to wsrv
    const cleanUrl = url.replace(/^https?:\/\//, '');
    
    // Construct the optimized URL
    // w: width (High res for retina displays)
    // q: quality (90 is visually lossless for thumbnails)
    // output: webp (Next-gen format, significantly smaller than PNG/JPG)
    // l: 1 (Progressive loading)
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=${quality}&output=webp&l=1`;
  };