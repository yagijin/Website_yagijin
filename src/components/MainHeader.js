import React from 'react';
import TabMenus from './TabMenus.js';
import '../App.scss';

export default function MainHeader() {

    return (
      <header className="header-main">
        <TabMenus />
        <h1 className="header-title">Portfolio</h1>
      </header>
    );
  }