import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    setEnabled(!isTouch);
    if (isTouch) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const hoverIn = (e) => {
      if (e.target.closest('a,button,[role="button"],input,textarea')) setHovered(true);
    };

    const hoverOut = () => setHovered(false);

    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', hoverIn, { passive: true });
    window.addEventListener('mouseout', hoverOut, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hoverIn);
      window.removeEventListener('mouseout', hoverOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.span
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[120] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400"
        animate={{ scale: hovered ? 1.5 : 1, backgroundColor: hovered ? '#8d7bff' : '#ff6a00' }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[119] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/70 shadow-[0_0_20px_rgba(255,106,0,0.45)]"
        animate={{ scale: hovered ? 1.4 : 1, borderColor: hovered ? 'rgba(141,123,255,0.9)' : 'rgba(255,106,0,0.7)' }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
