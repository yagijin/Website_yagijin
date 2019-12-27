import React from 'react';
import './Profile.css';

import SNSIcons from '../components/SNSIcons';
import Ability from '../components/Ability';
import CardList from '../components/CardList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap,faUser, faTools, faBook } from '@fortawesome/free-solid-svg-icons';
import imgProfile from 'assets/profile.jpeg';

export default function Profile() { 
  
  return (
    <div class="background">  
      <div>
        <div class="navigation-bar">
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
          <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer" class="navigation-tab">位置</a><br/>
        </div>
      </div>
      <div>
        <div style={{padding: 1 + "em"}}></div>
        <h1 class="title"><FontAwesomeIcon icon={faUser}/> Profile</h1>
        <div class="grid-profile">
          <img class="profile-img" src={imgProfile} alt="pic yagijin"/>
          <div>
            <h1>やぎじん</h1>
            <h3>名城大学修士課程1年在学中<br/>登呂遺跡非公式観光親善大使</h3>
            <SNSIcons/>
          </div>
        </div>

        <CardList/>

        <h1 class="title"><FontAwesomeIcon icon={faUser}/> Ability</h1>

        <Ability/>

        <h1 class="title"><FontAwesomeIcon icon={faTools}/> Products</h1>

        <CardList/>

        <h1 class="title"><FontAwesomeIcon icon={faTrophy}/> Award</h1>

        <h1 class="title"><FontAwesomeIcon icon={faGraduationCap}/> Research</h1>

        <h1 class="title"><FontAwesomeIcon icon={faBook}/> Article</h1>
        <div style={{padding: 1 + "em"}}></div>
      </div>
    </div>
  );
}
