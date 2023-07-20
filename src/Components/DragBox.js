import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function DragBox({ uid }) {

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { uid },
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
              alert(`You dropped ${item.uid} into ${dropResult.name}!`)
            }
          },
    }));

    return (
        <div className='m-2 p-2 w-20 h-20 bg-black text-white hover:cursor-pointer flex justify-center items-center' ref={drag}>
            DragBox
        </div>
    )
}

export default DragBox;