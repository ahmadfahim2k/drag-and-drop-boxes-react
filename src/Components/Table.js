import React from 'react'
import TableHeader from './TableHeader';
import { activeHeadersSelector } from '../Recoil';
import { useRecoilValue } from 'recoil';
import TableRows from './TableRows';

function Table() {

  const headers = useRecoilValue(activeHeadersSelector);
  // ["id", "first_name", "last_name", "email", "phone", "city", "country", "dob"]

  return (
    <div className="overflow-auto m-4  border-2 border-black">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            {headers.map((data, idx) => {
              return (
                <TableHeader key={idx} header={data} />
              )
            })}
          </tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    </div>
  )
}

export default Table;