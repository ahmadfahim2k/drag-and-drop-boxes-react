import { useRecoilState } from "recoil";
import { dragDataAtom } from "../Recoil";

function DragBox({ item }) {

    const [dragData, setDragData] = useRecoilState(dragDataAtom);

    function handleDragStart(e) {
        e.dataTransfer.setData("item", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    }

    function handleDragEnter(e) {
        e.preventDefault();
    }

    function handleDragOver(e) {
        const isText = e.dataTransfer.types.includes("item");
        if (isText) e.preventDefault();
    }

    //when dropping on top of this, append the dropped item to before this item
    function handleDrop(e) {
        const draggedItem = JSON.parse(e.dataTransfer.getData("item"));
        // console.log(draggedItem);
        setDragData(prev => {

            const newData = {};

            //remove from data
            Object.keys(prev).forEach(key => {
                newData[key] = prev[key].filter(box => box.name !== draggedItem.name)
            });

            //adding to new list
            const color = findColor(item);
            const index = newData[color].findIndex(obj => obj.name === item.name);
            newData[color].splice(index, 0, draggedItem);
            // console.log('newData', newData);
            return newData;
        });
        e.preventDefault();
        e.stopPropagation();
    }

    function findColor(item) {
        // Use for...of loop to iterate over colors directly
        for (const color of Object.keys(dragData)) {
            if (dragData[color].some(obj => obj.name === item.name)) {
                return color;
            }
        }
    }

    function handleClick() {
        setDragData(prev => {
            const newData = {};
            Object.keys(prev).forEach(key => {
                newData[key] = prev[key].filter(box => box.name !== item.name)
            });
            return newData;
        })
    }

    return (
        <div className={`m-1 p-3 w-64 h-12 bg-white shadow-lg drop-shadow-lg rounded-xl hover:cursor-pointer flex flex-row justify-between items-center`} draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="text-2xl flex justify-start items-center">
                {item.name}
            </div>
            <div className="bg-slate-300 text-red-400 h-6 w-6 rounded-full cursor-pointer flex justify-center items-center"onClick={handleClick}>
                X
            </div>
        </div>
    )
}

export default DragBox;