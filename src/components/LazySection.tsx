import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
  id?: string;
}

/**
 * High-performance viewport-triggered component mount.
 * Prevents heavy below-the-fold component JavaScript, animations,
 * and DOM nodes from executing during critical initial paint.
 */
export default function LazySection({
  children,
  rootMargin = '400px',
  minHeight = '500px',
  id,
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldRender) return;

    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={id}
      style={{ minHeight: shouldRender ? 'auto' : minHeight }}
      className="w-full"
    >
      {shouldRender ? children : null}
    </div>
  );
}
