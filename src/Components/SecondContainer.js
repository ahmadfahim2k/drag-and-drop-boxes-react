import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function SecondContainer() {

  const [boxes, setBoxes] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Blue Container' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} className='bg-blue-700 h-full w-full flex justify-center items-center'>
      SecondContainer
    </div>
  )
}

export default SecondContainer;