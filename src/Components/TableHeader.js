import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from './SearchBox';
import { useState } from 'react';

function TableHeader({ header }) {

    const [searchActive, setSearchActive] = useState(false);

    function formatString(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    function handleClick() {
        setSearchActive(prev => !prev);
    }

    return (
        <th className="px-4 py-2 flex-auto border-r-2 border-slate-300">
            <div className='h-8 flex flex-row justify-between items-center'>
                {searchActive ? <SearchBox header={header} /> :
                    <span className='font-semibold text-gray-700 select-none'>{formatString(header)}</span>
                }
                <FontAwesomeIcon className='px-2 cursor-pointer' onClick={handleClick} icon={faMagnifyingGlass} />
            </div>
        </th>
    )
}

export default TableHeader;