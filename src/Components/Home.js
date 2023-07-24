import { useRecoilValue } from 'recoil';
import { dataAtom } from '../Recoil';
import Container from './Container';

function Home() {

    const data = useRecoilValue(dataAtom);

    return (
        <div className='w-full h-screen flex flex-row justify-around items-center'>
            {Object.keys(data).map(key => {
                return (
                    <div className='basis-1/6 h-full' key={key}>
                        <Container color={key} key={key} />
                    </div>
                );
            })}
        </div>
    )
}

export default Home;