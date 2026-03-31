import { useEffect, useState } from 'react';

export default function useParallaxLayers() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;

    const handleMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMouse({ x: nx, y: ny });
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return {
    bg: { transform: `translate3d(${mouse.x * 12}px, ${mouse.y * 12}px, 0)` },
    mid: { transform: `translate3d(${mouse.x * 22}px, ${mouse.y * 22}px, 0)` },
    front: { transform: `translate3d(${mouse.x * 36}px, ${mouse.y * 36}px, 0)` },
  };
}
