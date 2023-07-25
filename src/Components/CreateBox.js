import { useRecoilState, useSetRecoilState } from 'recoil';
import { dragBoxInputAtom, dragDataAtom } from '../Recoil';

function CreateBox() {

    const [input, setInput] = useRecoilState(dragBoxInputAtom);
    const setDragData = useSetRecoilState(dragDataAtom);

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        setDragData(prev => {
            const newBox = { "name": input }
            const newData = JSON.parse(JSON.stringify(prev));
            newData[Object.keys(prev)[0]].push(newBox);
            return newData;
        });
        setInput('');
    }

    return (
        <div className='w-full h-20 flex justify-center items-center'>
            <input type='text' className='h-10 mr-4 pl-2 border-2 rounded-xl text-xl' onChange={handleChange} value={input} placeholder='Add new item' />
            <button className='p-2 h-10 w-20 border-2 rounded-xl' onClick={handleClick}>Add</button>
        </div>
    )
}

export default CreateBox;