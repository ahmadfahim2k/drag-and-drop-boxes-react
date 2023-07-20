import React from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function ThirdContainer() {

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Green Container' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} className='bg-green-700 h-full w-full flex justify-center items-center'>
      ThirdContainer
    </div>
  )
}

export default ThirdContainer;