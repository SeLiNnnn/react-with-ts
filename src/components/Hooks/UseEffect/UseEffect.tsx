import React, {useEffect, useState} from 'react';

interface IPosition {
  x: number;
  y: number
}

const UseEffect: React.FC = () => {
    const [position, setPosition] = useState<IPosition>({x: 0, y: 0});
    const changePosition = (evt: MouseEvent) => {
      setPosition({x: evt.clientX, y: evt.clientY});
    };
    useEffect(() => {
      console.log('add effect');
      document.addEventListener('mousemove', changePosition);
      console.log('before render');
      return () => {
        document.removeEventListener('mousemove', changePosition);
        console.log('remove effect');
      };
    },[]);

    return (
      <section>
        <h3>Use Effect</h3>
        <p>Position X: {position.x} Y: {position.y} </p>
      </section>
    );
  }
;

export default UseEffect;
