import React from 'react'
import { globalSearchFilterAtom } from '../Recoil';
import { useRecoilState } from 'recoil';

function GlobalSearchBox() {

    const [globalSearch, setGlobalSearch] = useRecoilState(globalSearchFilterAtom);

    function handleChange(e) {
        setGlobalSearch((e.target.value).toLowerCase());
    }

    return (
        <div className='ml-4'>
            <input type='text' className='h-full mr-4 pl-2 border-2 rounded-xl text-xl' onChange={handleChange} value={globalSearch} placeholder='Search...' />
        </div>
    )
}

export default GlobalSearchBox;