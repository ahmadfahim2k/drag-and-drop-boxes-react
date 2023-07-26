import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { searchFieldAtom, searchTextAtom } from '../Recoil';
import { useEffect } from 'react';

function SearchBox() {

    const [input, setInput] = useRecoilState(searchTextAtom);
    const resetInput = useResetRecoilState(searchTextAtom);
    const placeholder = useRecoilValue(searchFieldAtom);

    function handleChange(e) {
        setInput(e.target.value);
    };

    useEffect(() => {
        return () => resetInput();
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <input type='text' className='h-6 w-40 mr-2 pl-2 border-2 rounded-xl text-lg font-thin' onChange={handleChange} value={input} placeholder={`search.. ${placeholder}`} />
        </div>
    )
}

export default SearchBox;