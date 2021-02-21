import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const room1 = useRef();
  const room2 = useRef();
  const room3 = useRef();


  const roomFunction = (e, room1, room2, room3) => {
    if (e.target === room1.current) {
      setRoom('Room 1');
      if (room1.current.className === 'room-button') {
        room1.current.className += ' clicked';
        room2.current.className = 'room-button';
        room3.current.className = 'room-button';
      }
    }
    if (e.target === room2.current) {
      setRoom('Room 2');
      if (room2.current.className === 'room-button') {
        room2.current.className += ' clicked';
        room1.current.className = 'room-button';
        room3.current.className = 'room-button';
      }
    }
    if (e.target === room3.current) {
      setRoom('Room 3');
      if (room3.current.className === 'room-button') {
        room3.current.className += ' clicked';
        room1.current.className = 'room-button';
        room2.current.className = 'room-button';
      }
    }
  }


  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Name</h1>
        <div>
          <input
            placeholder='Enter name...'
            className='joinInput'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <h1 className='heading'>Pick Room</h1>
        <div>
          <button className='room-button' ref={room1} onClick={(e) => roomFunction(e, room1, room2, room3)}>Room 1</button>
          <button className='room-button' ref={room2} onClick={(e) => roomFunction(e, room1, room2, room3)}>Room 2</button>
          <button className='room-button' ref={room3} onClick={(e) => roomFunction(e, room1, room2, room3)}>Room 3</button>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='button mt-20' type='submit'>Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

