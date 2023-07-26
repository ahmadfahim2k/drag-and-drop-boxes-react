import { useRecoilState, useRecoilValue } from 'recoil';
import { activeColumnsAtom, userDataHeadersSelector } from '../Recoil';

function ColumnHider() {

  const headers = useRecoilValue(userDataHeadersSelector);
  const [activeColumns, setActiveColumns] = useRecoilState(activeColumnsAtom);

  function toggleColumn(header) {
    if (activeColumns.includes(header)) {
      setActiveColumns(activeColumns.filter(e => e !== header));
    }
    else {
      setActiveColumns(prev => [...prev, header]);
    }
  }

  return (
    <div className='absolute top-10 left-0 w-full select-none bg-red-500 rounded-lg flex flex-col justify-around items-center'>
      {headers.map(header => {
        const isChecked = activeColumns.includes(header);
        return (
          <label className='w-full px-2 cursor-pointer flex items-center' key={header}>
            <input className='h-5 w-5 m-1' type='checkbox' checked={isChecked} onChange={() => toggleColumn(header)} />
            <span className='uppercase'>{header}</span>
          </label>
        );
      })}
    </div>
  )
}

export default ColumnHider;