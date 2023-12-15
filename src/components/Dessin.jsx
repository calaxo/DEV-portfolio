import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Shape } from 'react-konva';

const Dessin = () => {
  const gridSize = 20;
  const circleSize = 3;
  const circleSpacing = 15;

  const circlesRef = useRef([]);
  const circlesLayer = useRef();

  // Define the structure for the letter "HELLO"
  const letterPositions = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 0 },
    { x: 3, y: 2 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    { x: 4, y: 3 },
  ];

  const letterAPositions  = [
    {
        "x": 1,
        "y": 2
    },
    {
        "x": 1,
        "y": 3
    },
    {
        "x": 1,
        "y": 4
    },
    {
        "x": 1,
        "y": 5
    },
    {
        "x": 1,
        "y": 6
    },
    {
        "x": 1,
        "y": 7
    }
]



  
    const letterBPositions = [

    { x: 5, y: 5 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 0 },
    { x: 3, y: 2 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    ];
    useEffect(() => {
        circlesRef.current = Array.from({ length: gridSize * gridSize }, (_, i) => ({
          x: (i % gridSize) * (circleSize + circleSpacing),
          y: Math.floor(i / gridSize) * (circleSize + circleSpacing),
          targetX: undefined,
          targetY: undefined,
          moving: true,
        }));
      }, [gridSize, circleSize, circleSpacing]);
    
      useEffect(() => {
        const layer = circlesLayer.current;
    
        const updateCircles = () => {
          circlesRef.current.forEach((circle, i) => {
            if (circle.targetX !== undefined && circle.targetY !== undefined && circle.moving) {
              circle.x += (circle.targetX - circle.x) * 0.1;
              circle.y += (circle.targetY - circle.y) * 0.1;
    
              if (Math.abs(circle.targetX - circle.x) < 0.1 && Math.abs(circle.targetY - circle.y) < 0.1) {
                circle.moving = false;
              }
            } else if (circle.moving) {
              circle.x += Math.random() * 2 - 1;
              circle.y += Math.random() * 2 - 1;
    
              circle.x = Math.max(0, Math.min(layer.width() - circleSize, circle.x));
              circle.y = Math.max(0, Math.min(layer.height() - circleSize, circle.y));
            }
          });
    
          layer.batchDraw();
    
          requestAnimationFrame(updateCircles);
        };
    
        const alignmentTimeout = setTimeout(() => {
          // Set target positions for letter A
          letterAPositions.forEach((pos, i) => {
            const circleIndex = pos.y * gridSize + pos.x;
            const targetX = pos.x * (circleSize + circleSpacing);
            const targetY = pos.y * (circleSize + circleSpacing);
            circlesRef.current[circleIndex].targetX = targetX;
            circlesRef.current[circleIndex].targetY = targetY;
          });
    
          // Set target positions for letter B
          letterBPositions.forEach((pos, i) => {
            const circleIndex = pos.y * gridSize + pos.x;
            const targetX = pos.x * (circleSize + circleSpacing);
            const targetY = pos.y * (circleSize + circleSpacing);
            circlesRef.current[circleIndex].targetX = targetX;
            circlesRef.current[circleIndex].targetY = targetY;
          });
        }, 200);
    
        const animationId = requestAnimationFrame(updateCircles);
    
        return () => {
          cancelAnimationFrame(animationId);
          clearTimeout(alignmentTimeout);
        };
      }, []);
    
      const drawCircles = (context, shape) => {
        circlesRef.current.forEach(circle => {
          context.beginPath();
          context.arc(circle.x, circle.y, circleSize, 0, 2 * Math.PI, false);
          context.fillStyle = 'white';
          context.strokeStyle = 'black';
          context.lineWidth = 1;
          context.fill();
          context.stroke();
        });
      };
    
      return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer ref={circlesLayer}>
            <Shape sceneFunc={drawCircles} />
          </Layer>
        </Stage>
      );
    };
    
    export default Dessin;