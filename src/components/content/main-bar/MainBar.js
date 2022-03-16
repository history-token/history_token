import React from 'react';
import Posts from '../posts/Posts';
import './mainbar.css';



function MainBar(){
    return <div className='mainbar'>
      
        <div className='filter'>
            <div className='filter-element hoverable'>
                <img src="./Assets/hot.svg"/> 
                <span className='hot'>Hot</span>  
            </div>
            <div className='filter-element-secondary hoverable'>
                <img src="./Assets/new.svg"/>
                <span>New</span>
            </div>
            <div className='filter-element-secondary hoverable'>
                <img src="./Assets/top.svg"/>
                <span>Top</span>
            </div>
            <div className='filter-element hoverable'>
                <span>America</span>
                <img src="./Assets/arrow.svg"/> 
            </div>
        </div>
        <Posts/>
    </div>
}

export default MainBar;