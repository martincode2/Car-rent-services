import React from 'react'

function Home()
{
    const {cars}= useSelector(state=>state.carsReducer);
    return(
        <div>
<h1>Home Page</h1>


        </div>
    )
};
export default Home;