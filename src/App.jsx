import React, {  } from 'react';
import './App.css';
import StickyCursor from './Components/StickyCursor/StickyCursor';
import Navbar from './Components/Navbar/Navbar';
import Page from './Page/Page';
import LoadingAnimation from './Components/LoadingAnimation';
import Projects from './Page/Projects/Projects';

function App() {
  

    return (
        <div >
        {/* <LoadingAnimation/>
        <Navbar/>
        <Page/> */}
        <Projects/>
        </div>
    );
}

export default App;
