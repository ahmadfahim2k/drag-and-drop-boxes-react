import React from 'react'
import DragBox from './DragBox';

function FirstContainer() {
  return (
    <div className='bg-red-700 h-full w-full flex flex-col justify-center items-center'>
      <DragBox uid={1}/>
      <DragBox uid={2} />
      <DragBox uid={3} />
    </div>
  )
}

export default FirstContainer;