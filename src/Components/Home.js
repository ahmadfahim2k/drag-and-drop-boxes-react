import React from 'react'
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';

function Home() {
    return (
        <div className='w-full h-screen flex flex-row justify-around items-center'>
            <div className='basis-1/4 h-full'>
                <FirstContainer />
            </div>
            <div className='basis-1/6 h-full'>
                <SecondContainer />
            </div>
            <div className='basis-1/6 h-full'>
                <ThirdContainer />
            </div>
            <div className='basis-1/6 h-full'>
                <FourthContainer />
            </div>
        </div>
    )
}

export default Home;