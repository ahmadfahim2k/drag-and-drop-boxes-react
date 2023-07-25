import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dragDataAtom, filteredDragDataSelector } from '../Recoil';
import DragBox from './DragBox';

function Container({ color }) {

    const boxes = useRecoilValue(filteredDragDataSelector(color));
    const setDragData = useSetRecoilState(dragDataAtom);

    function handleDragEnter(e) {
        e.preventDefault();
    }

    function handleDragOver(e) {
        const isText = e.dataTransfer.types.includes("item");
        if (isText) e.preventDefault();
    }

    function handleDrop(e) {
        const item = JSON.parse(e.dataTransfer.getData("item"));
        // console.log(item);
        setDragData(prev => {

            const newData = {};
            //remove from data
            Object.keys(prev).forEach(key => {
                newData[key] = prev[key].filter(box => box.name !== item.name)
            });

            //adding to new list
            newData[color].push(item);
            return newData;
        });
        e.preventDefault();
    }

    function formatString(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    return (
        <div className={`p-2 border-2 min-h-[400px] rounded-md border-${color}-700 shadow-xl h-full w-full flex flex-col justify-start items-center`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className={`border-b-2 border-${color}-700 w-full flex justify-center`}>
                <span className='text-xl font-semibold select-none'>{formatString(`${color} container`)}</span>
            </div>
            <div className='mt-4 flex flex-col justify-center items-center'>
                {boxes.map((box, i) => <DragBox item={box} key={i} />)}
            </div>
        </div>
    )
}

export default Container;