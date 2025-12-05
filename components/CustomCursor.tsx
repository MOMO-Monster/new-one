import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointers (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Main Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-acid-green rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 0 : 1})`,
        }}
      />
      {/* Outer Ring / Hover State */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-acid-green rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference flex items-center justify-center"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 2 : 1})`,
          backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.1)' : 'transparent',
          borderWidth: isHovering ? '0px' : '1px'
        }}
      >
        {isHovering && <span className="text-[6px] text-acid-green font-mono font-bold">OPEN</span>}
      </div>
    </div>
  );
};

export default CustomCursor;