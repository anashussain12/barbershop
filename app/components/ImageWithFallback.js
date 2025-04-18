'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({ src, alt, fallbackClassName, ...props }) {
  const [error, setError] = useState(false);

  return (
    <>
      {error && (
        <div className={`absolute inset-0 ${fallbackClassName}`}></div>
      )}
      {!error && (
        <Image
          src={src}
          alt={alt}
          {...props}
          onError={() => setError(true)}
        />
      )}
    </>
  );
}