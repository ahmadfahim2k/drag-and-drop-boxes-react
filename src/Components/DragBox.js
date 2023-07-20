import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

function DragBox({  item, index, moveItem } ) {

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { ...item },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }));

    drag(drop(ref));

    return (
        <div className={`m-2 p-2 w-20 h-20 bg-black text-white text-3xl hover:cursor-pointer flex justify-center items-center opacity-${isDragging ? 0 : 100}`} ref={ref}>
            {item.name}
        </div>
    )
}

export default DragBox;