import CursorSVG from '@/public/assets/CursorSVG';
import React from 'react';

interface Props {
  color: string;
  x: number;
  y: number;
  message: string;
}

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {/* message */}
    </div>
  );
};

export default Cursor;
