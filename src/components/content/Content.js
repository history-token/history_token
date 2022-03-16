import React from 'react';
import './content.css';
import MainBar from './main-bar/MainBar';
import SideBar from './side-bar/SideBar';
import TrendingToday from './trending-today/TrendingToday';

function Content(){
    return <div className='content'>
        <TrendingToday/>
        <div className='bar-wrapper'>
            <span className="popular-posts-title">Popular Posts</span>
            <div className='bar-wrapper-inside'>
                <MainBar/>
                <SideBar/>
            </div>
        </div>
    </div>;
}

export default Content;