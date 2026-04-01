import { useEffect, useState } from 'react';

export default function SafeImage({ src, alt, className = '', fallback = 'https://picsum.photos/600/400?random=12', ...props }) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  useEffect(() => {
    setImgSrc(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={imgSrc || fallback}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
      loading="lazy"
      {...props}
    />
  );
}
