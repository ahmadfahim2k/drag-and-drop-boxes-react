import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <Link to={"/drag"}>Drag Application</Link>
        </div>
    )
}

export default Home;