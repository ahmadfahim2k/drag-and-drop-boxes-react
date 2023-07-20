import React from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function FourthContainer() {

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Yellow Container' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div ref={drop} className='bg-yellow-700 h-full w-full flex justify-center items-center'>
      FourthContainer
    </div>
  )
}

export default FourthContainer;