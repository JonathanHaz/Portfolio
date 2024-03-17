import React, {  } from 'react';
import './App.css';
import StickyCursor from './Components/StickyCursor/StickyCursor';
import Navbar from './Components/Navbar/Navbar';
import Page from './Page/Page';
import LoadingAnimation from './Components/LoadingAnimation';
import SlidingText from './Components/SlidingText';

function App() {
  

    return (
        <div >
        <LoadingAnimation/>
        <StickyCursor/>
        <Navbar/>
        <Page/>
        </div>
    );
}

export default App;
