import { useRecoilValue } from 'recoil';
import { activeHeadersSelector, fieldFilteredUserDataSelector } from '../Recoil';
import TableCell from './TableCell';

function TableRows() {

    const headers = useRecoilValue(activeHeadersSelector);
    const filteredData = useRecoilValue(fieldFilteredUserDataSelector);

    return (
        <>
            {filteredData.map((item, idx) => {
                const isEvenRow = idx % 2 === 0; // Check if the row index is even
                const rowClass = isEvenRow ? 'bg-gray-100' : 'bg-white';
                return <tr key={item.id} className={`border-t border-gray-300 ${rowClass}`}>
                {
                    headers.map((field, idx) => <TableCell key={idx} item={item} field={field} />)
                }
                </tr>
            })
            }
        </>
    )
}

export default TableRows;