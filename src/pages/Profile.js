import React from 'react';
import CardWithPic from '../components/CardWithPic';
import './Profile.css';
import SNSIcons from '../components/SNSIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap,faUser, faTools, faBook } from '@fortawesome/free-solid-svg-icons';

export default function Profile() { 
  const mousehat_text = <>様々な賞を受賞．<br/>口癖を直すのを手伝ってくれるWebアプリ．<br/>JPHacks2019にて作成．<br/>内部の処理を担当．</>;
    
  return (
    <div> 
      <h1 class="title"><FontAwesomeIcon icon={faUser}/> Profile</h1>
      <div class="grid-profile">
        <img class="profile-img" src="./static/profile.jpeg" alt="pic yagijin"/>
        <div>
          <h1>やぎじん</h1>
          <h3>名城大学修士課程1年在学中<br/>登呂遺跡非公式観光親善大使</h3>
          <SNSIcons/>
        </div>
      </div>

      <div class="grid-content">
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
      </div>

      <h1 class="title"><FontAwesomeIcon icon={faTools}/> Products</h1>

      <div class="grid-content">
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
        <CardWithPic imageURL="./static/products/mousehat.png" title="Mousehat" text={mousehat_text}/>
      </div>

      <h1 class="title"><FontAwesomeIcon icon={faTrophy}/> Award</h1>

      <h1 class="title"><FontAwesomeIcon icon={faGraduationCap}/> Research</h1>

      <h1 class="title"><FontAwesomeIcon icon={faBook}/> Article</h1>

    </div>
  );
}
