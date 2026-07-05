import { useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
}

export function Magnet({ children, strength = 3, padding = 150 }: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const offsetX = ((x - centerX) / centerX) * strength;
    const offsetY = ((y - centerY) / centerY) * strength;
    const distance = Math.hypot(x - centerX, y - centerY);
    const maxDistance = Math.min(bounds.width, bounds.height) / 2 + padding;
    setPosition({ x: distance < maxDistance ? offsetX : 0, y: distance < maxDistance ? offsetY : 0 });
    setIsActive(distance < maxDistance);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setPosition({ x: 0, y: 0 });
        setIsActive(false);
      }}
      style={{ willChange: 'transform', transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      className="transition-transform duration-[300ms] ease-out"
    >
      {children}
    </div>
  );
}
