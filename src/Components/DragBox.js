

function DragBox({ item } ) {

    function handleDragStart(e) {
        e.dataTransfer.setData("item", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    }

    function handleDragEnter(e) {
        console.log(e);
    }
    //when dropping on top of this, append the dropped item to before this item

    return (
        <div className={`m-1 p-3 w-20 h-20 bg-black text-white text-3xl hover:cursor-pointer flex justify-center items-center select-none`} draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter}>
            {item.name}
        </div>
    )
}

export default DragBox;