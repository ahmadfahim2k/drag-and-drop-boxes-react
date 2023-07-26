import { useRecoilValue } from 'recoil';
import { activeHeadersSelector, fieldFilteredUserDataSelector } from '../Recoil';

function TableRows() {

    const headers = useRecoilValue(activeHeadersSelector);
    const filteredData = useRecoilValue(fieldFilteredUserDataSelector);

    return (
        <>
            {filteredData.map((item, idx) => {
                const isEvenRow = idx % 2 === 0; // Check if the row index is even
                const rowClass = isEvenRow ? 'bg-gray-100' : 'bg-white';
                return <tr key={item.id} className={`border-t border-gray-300 ${rowClass}`}>
                    {headers.map((field, idx) => {
                        return (
                            <td key={idx} className="px-4 py-2 text-center select-none">
                                {item[field]}
                            </td>
                        );
                    })}
                </tr>
            })
            }
        </>
    )
}

export default TableRows;