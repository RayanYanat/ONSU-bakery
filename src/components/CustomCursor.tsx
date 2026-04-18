import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) {
        el.classList.add('is-hovered');
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) {
        el.classList.remove('is-hovered');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}
