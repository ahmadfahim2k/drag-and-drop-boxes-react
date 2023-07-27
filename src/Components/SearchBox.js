import { useRecoilValue, useSetRecoilState } from 'recoil';
import { localSearchFilterSelector, localSearchFiltersAtom } from '../Recoil';
import { useEffect } from 'react';

function SearchBox({ header }) {

    const setLocalSearchFilters = useSetRecoilState(localSearchFiltersAtom);
    const textValue = useRecoilValue(localSearchFilterSelector(header));

    function handleChange(e) {
        setLocalSearchFilters(prev => ({ ...prev, [header]: e.target.value}))
    };

    useEffect(() => {
        setLocalSearchFilters(prev => ({ ...prev, [header]: ''}));
        //eslint-disable-next-line
    }, []);

    // useEffect(() => {
    //     console.log(header, textValue);
    // }, [textValue])

    return (
        <div className='flex-auto h-8 mr-2 pl-2 border-2 rounded-xl text-lg font-thin flex items-center'>
            <input type='text' className='border-none outline-none bg-transparent shadow-none' onChange={handleChange} value={textValue} placeholder={`search ${header}`} autoFocus/>
        </div>
    )
}

export default SearchBox;