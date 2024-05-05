import React, {useEffect, useState} from 'react';
import SysNavBar from './SysNabBar/SysNavBar';
import UserNavBar from './UserNavBar/UserNavBar';

const Home = () => {
  return (
    <div>
      <UserNavBar/>
      <SysNavBar />
    </div>
  );
};

export default Home;
