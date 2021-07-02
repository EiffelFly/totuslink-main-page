import { Navbar } from "./components/Navbar";
import { MainIntro } from "./components/MainIntro";

//import React from 'react';
//import logo from './logo.svg';

function App() {
  return (
    <div className="App flex flex-col h-screen w-screen bg-sd-brwhite">
      <Navbar />
      <MainIntro />
    </div>
  );
}

export default App;
