'use client';

import React, { useCallback } from 'react';
import LiveCursors from './cursor/LiveCursors';
import { useMyPresence, useOthers } from '@liveblocks/react';

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  console.log(others, 'others');

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({
      cursor: { x, y },
    });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    updateMyPresence({
      cursor: null,
      message: null,
    });
  }, []);

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({
      cursor: { x, y },
    });
  }, []);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      className="h-[100vh] w-full flex justify-center items-center text-center border-2 border-green-500"
    >
      <h1 className="text-2xl text-white">Live Block Figma Clone</h1>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
