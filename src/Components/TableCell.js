import React from 'react'

function TableCell({ item = [''], field = 0 }) {
    return (
        <td className="px-4 py-2 text-left select-none border-r-2 border-slate-300 border-collapse">
            {item[field]}
        </td>
    )
}

export default TableCell;