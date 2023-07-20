import React, { useState } from 'react'
import DragBox from './DragBox';

function FirstContainer() {

  const [boxes, setBoxes] = useState([
    {
      name: 1
    },
    {
      name: 2
    },
    {
      name: 3
    }
  ]);

  return (
    <div className='bg-red-700 h-full w-full flex flex-col justify-center items-center'>
      {boxes.map((box, i) => <DragBox item={box} key={i} />)}
    </div>
  )
}

export default FirstContainer;