import React from 'react';
import LiveCursors from './cursor/LiveCursors';
import { useOthers } from '@liveblocks/react';

const Live = () => {
  const others = useOthers();

  console.log(others, 'others');

  return (
    <div>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
