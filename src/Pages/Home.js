import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Link className='w-96 h-20 m-10 p-10 text-3xl font-semibold border-2 border-slate-300 shadow-2xl flex justify-center items-center' to={"/drag"}>Drag Application</Link>
            <Link className='w-96 h-20 m-2 p-2 text-3xl font-semibold border-2 border-slate-300 shadow-2xl flex justify-center items-center' to={"/searchTable"}>Table</Link>
        </div>
    )
}

export default Home;