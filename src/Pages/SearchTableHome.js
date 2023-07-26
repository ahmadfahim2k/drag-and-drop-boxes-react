import { useEffect } from "react";
import axios from 'axios';
import Table from "../Components/Table";
import { useRecoilState, useSetRecoilState } from "recoil";
import { enableColumnHiderAtom, userDataAtom, userDataSearchAtom } from "../Recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ColumnHider from "../Components/ColumnHider";

function SearchTableHome() {

  const [globalSearch, setGlobalSearch] = useRecoilState(userDataSearchAtom);
  const [columnHider, setColumnHider] = useRecoilState(enableColumnHiderAtom);
  const setUserData = useSetRecoilState(userDataAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/MOCK_DATA.json');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  function handleChange(e) {
    setGlobalSearch((e.target.value).toLowerCase());
  }

  function toggleColumnHider() {
    setColumnHider(prev => !prev);
  }

  return (
    <div>
      <h1 className='text-center mt-4 font-bold text-3xl select-none'>Table Search</h1>
      <div className="h-10 flex flex-row justify-between">
        <input type='text' className='h-full mr-4 pl-2 border-2 rounded-xl text-xl' onChange={handleChange} value={globalSearch} placeholder='Search...' />
        <div className="mr-4 h-full w-48 border-2 border-slate-300 shadow-lg drop-shadow-lg rounded-xl hover:cursor-pointer flex justify-around items-center" >
          <div className="px-2 w-full flex justify-between items-center" onClick={toggleColumnHider}>
            <span className="text-slate-500 select-none">Show columns...  </span>
            <FontAwesomeIcon className="text-slate-500" icon={faChevronDown} />
          </div>
          <div>
            {columnHider && <ColumnHider />}
          </div>
        </div>

      </div>
      <Table />
    </div>
  )
}

export default SearchTableHome;