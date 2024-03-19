import React, {  } from 'react';
import './App.css';
import StickyCursor from './Components/StickyCursor/StickyCursor';
import Navbar from './Components/Navbar/Navbar';
import Page from './Page/Page';
import LoadingAnimation from './Components/LoadingAnimation';

function App() {
  

    return (
        <div style={{backgroundColor:"#999d9e"}} >
        {/* <StickyCursor/> */}
        <LoadingAnimation/>
        <Navbar/>
        <Page/>
        </div>
    );
}

export default App;
