import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dataAtom, filteredDataSelector } from '../Recoil';
import DragBox from './DragBox';

function Container({ color }) {

    const boxes = useRecoilValue(filteredDataSelector(color));
    const setData = useSetRecoilState(dataAtom);

    function handleDragEnter(e) {
        e.preventDefault();
    }

    function handleDragOver(e) {
        const isText = e.dataTransfer.types.includes("item");
        if (isText) e.preventDefault();
    }

    function handleDrop(e) {
        const item = JSON.parse(e.dataTransfer.getData("item"));
        console.log(item);
        setData(prev => {

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

    return (
        <div className={`bg-${color}-700 h-full w-full flex flex-col justify-center items-center`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}>
            {`${color} container`}
            {boxes.map((box, i) => <DragBox item={box} key={i} />)}
        </div>
    )
}

export default Container;