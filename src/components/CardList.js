import React from 'react';
import './CardList.css';
import CardWithPic from '../components/CardWithPic';
import contents from '../assets/content.json';

export default function CardList() { 

  const listItems = contents.map((content)=> 
    <CardWithPic imageURL={content.imgURL} title={content.title} text={content.text}/>
  );

  return (
      <div class="grid-content">
        {listItems}
      </div>
  );
}
