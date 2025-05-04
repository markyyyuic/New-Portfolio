import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cursorPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 🆕 Mobile check

  useEffect(() => {
    const checkMobile = () => {
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        setIsMobile(true); // It's mobile
      } else {
        setIsMobile(false); // It's desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursor-hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      cursorPosition.current.x += (mousePosition.x - cursorPosition.current.x) * 0.08;
      cursorPosition.current.y += (mousePosition.y - cursorPosition.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);

  if (isMobile) {
    return null; // 🛑 Do not render anything on mobile!
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? '50px' : '30px',
        height: isHovering ? '50px' : '30px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        pointerEvents: 'none',
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
      }}
    />
  );
};

export default CustomCursor;
