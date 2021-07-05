import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import './App.css';
import { action, comedy, documentary, horror, originals, romance } from './url/Url';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
    </div>
  )
}

export default App
