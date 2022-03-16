import React from "react";
import './community.css';
import communties from "../../data/communities/communities.json";
import {BtnCommunityothers, ButtonCommunity, ButtonCommunityJoin} from "../button/Button";

function Community(){
    return <div className="community-section">
    <div className="title">
      <span className="hoverable">Top News Communities</span>
    </div>
    <div className="communities-wrapper">
      {communties.map((community, index) => (
        <div className="community hoverable">
          <span  className="number">{index + 1}</span>
          <img src={community.image_src} />
          <span className="name">{community.name}</span>
          <ButtonCommunityJoin label="Join"/>
        </div>
      ))}
    </div>
     <div className="action-buttons">
      <ButtonCommunity label="View All" />
      <div className="secondary-buttons">
        <BtnCommunityothers label="Top" />
        <BtnCommunityothers label="Trending" />
        <BtnCommunityothers label="News" />
        <BtnCommunityothers label="Near You" />
      </div>
    </div> 
  </div>
}

export default Community;