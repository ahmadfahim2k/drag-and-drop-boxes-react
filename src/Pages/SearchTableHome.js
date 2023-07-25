import { useEffect } from "react";
import axios from 'axios';
import Table from "../Components/Table";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filteredUserDataSelector, userDataAtom, userDataHeadersSelector, userDataSearchAtom } from "../Recoil";

function SearchTableHome() {

  const [search, setSearch] = useRecoilState(userDataSearchAtom);
  const setUserData = useSetRecoilState(userDataAtom);
  const filteredData = useRecoilValue(filteredUserDataSelector);
  const headers = useRecoilValue(userDataHeadersSelector);
  // ["id", "first_name", "last_name", "email", "phone", "city", "country", "dob"]

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
    setSearch((e.target.value).toLowerCase());
  }

  return (
    <div>
      <h1 className='text-center mt-4 font-bold text-3xl'>Table Search</h1>
      <div>
        <input type='text' className='h-10 mr-4 pl-2 border-2 rounded-xl text-xl' onChange={handleChange} value={search} placeholder='Search...' />

      </div>
        {
          filteredData && <Table tableData={filteredData} headerData={headers} />
        }
    </div>
  )
}

export default SearchTableHome;