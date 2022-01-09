import React from 'react'
import Announcement  from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
//arrow function
const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    );
};

//function is exported here
//then can be used elsewhere such as in App.jsx
export default Home;

