import React from 'react'
import { dragDataAtom } from '../Recoil';
import { useRecoilValue } from 'recoil';
import Container from '../Components/Container';
import CreateBox from '../Components/CreateBox';

function DragDropHome() {

    const data = useRecoilValue(dragDataAtom);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='basis-1/6'>
                <CreateBox />
            </div>
            <div className='w-full flex flex-row justify-around items-center'>
            {Object.keys(data).map(key => {
                return (
                    <div className='basis-1/6 h-full' key={key}>
                        <Container color={key} key={key} />
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default DragDropHome;