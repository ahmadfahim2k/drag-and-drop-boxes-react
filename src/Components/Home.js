import React, { useState } from 'react'
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';

function Home() {

    const [items, setItems] = useState([
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        }
      ]);

    // const onDrop = (item, monitor, status) => {
    //     const mapping = statuses.find(si => si.status === status);

    //     setItems(prevState => {
    //         const newItems = prevState
    //             .filter(i => i.id !== item.id)
    //             .concat({ ...item, status, icon: mapping.icon });
    //         return [ ...newItems ];
    //     });
    // };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

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