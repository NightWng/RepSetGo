import React from 'react'
import Announcement  from '../components/Announcement'
import Categories from '../components/Categories';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Slider from '../components/Slider';
//arrow function
const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </div>
    );
};

//function is exported here
//then can be used elsewhere such as in App.jsx
export default Home;

