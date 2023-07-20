import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function SecondContainer({ onDrop, children, status }) {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div ref={drop} className='bg-blue-700 h-full w-full flex flex-col justify-center items-center'>
      SecondContainer
      {children}
    </div>
  )
}

export default SecondContainer;