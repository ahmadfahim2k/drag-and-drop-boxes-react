import React from 'react'

function Table( {tableData, headerData }) {

    const tableHeader = () => {
      return headerData.map((data, idx) => {
        return (        
            <th key={idx} className="px-4 py-2 font-semibold text-gray-700">{formatString(data)}</th>
        )
      })
    }
  
    const returnTableData = () => {
        return tableData.map((item, idx) => {
          const isEvenRow = idx % 2 === 0; // Check if the row index is even
          const rowClass = isEvenRow ? 'bg-gray-100' : 'bg-white'; 
    
          return (
            <tr key={item.id} className={`border-t border-gray-300 ${rowClass}`}>
              {headerData.map((field, idx) => {
                return (
                  <td key={idx} className="px-4 py-2 text-center">
                    {item[field]}
                  </td>
                );
              })}
            </tr>
          );
        });
      };

    function formatString(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>            
              {tableHeader()}
            </tr>          
          </thead>
          <tbody>
            {returnTableData()}          
          </tbody>
        </table>
      </div>
    )
  }

export default Table;