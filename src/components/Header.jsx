import React, { useState } from 'react';
import TopBar from './TopBar';          
import MainHeader from './MainHeader';  
import Navigation from './Navigation';  
import Sidebar from './Sidebar';   
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <TopBar />
      <MainHeader onMenuClick={() => setSidebarOpen(true)} />
      <Navigation />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </>);};
export default Header;