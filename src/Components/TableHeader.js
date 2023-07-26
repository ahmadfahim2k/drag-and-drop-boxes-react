import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from './SearchBox';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { searchFieldAtom } from '../Recoil';

function TableHeader({ header }) {

    const [searchField, setSearchField] = useRecoilState(searchFieldAtom);
    const resetSearchField = useResetRecoilState(searchFieldAtom);

    function formatString(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    function handleClick() {
        if(searchField === header) resetSearchField();
        else setSearchField(header);
    }

    return (
        <th className="px-4 py-2 border-t-2 border-black">
            <div className='flex flex-row justify-center items-center'>
                {searchField === header ? <SearchBox /> :
                    <span className='font-semibold text-gray-700 select-none'>{formatString(header)}</span>
                }
                <FontAwesomeIcon className='mx-2 cursor-pointer' onClick={handleClick} icon={faMagnifyingGlass} />
            </div>
        </th>
    )
}

export default TableHeader;