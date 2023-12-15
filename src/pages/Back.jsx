import React, { useState } from 'react';

const Back = () => {
  const [drawing, setDrawing] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = () => {
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseOver = (x, y) => {
    if (isDrawing) {
      setDrawing(prevDrawing => [...prevDrawing, { x, y }]);
    }
  };

  const handleGetPositions = () => {
    console.log('Positions drawn:', drawing);
  };

  return (
    <div>
      <button onClick={handleGetPositions}>Get Positions</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 40px)',
          gap: '1px',
        }}
      >
        {Array.from({ length: 100 }, (_, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              border: '1px solid #ccc',
              backgroundColor: drawing.some(pos => pos.x * 10 + pos.y === index) ? 'black' : 'white',
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOver={() => {
              const x = Math.floor(index / 10);
              const y = index % 10;
              handleMouseOver(x, y);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Back;

