import React from 'react';
import './TrendingToday.css';
import trendingItems from "../../../data/trending-items/trending-items.json";
import { InsertEmoticon } from '@material-ui/icons';

function TrendingToday(){
    return <div className='trending-today-section'>
        <span className='title'>Trending Today</span>
        <div className='items'>
            {trendingItems.map((item, index) => (
                <div className='trending-item hoverable'style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 40%, transparent), url(${item.image_src})`}}>
                    <div className='context'>
                        <span className='title'>{item.title}</span>
                        <br/>
                        <span className='description'>{item.description}</span>
                        <div className='subhstk'>
                            <img src={item.subhstk.image_src}/>
                            <span>{item.subhstk.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>;
}

export default TrendingToday;