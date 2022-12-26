import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './screens/home/home';

function App() {
  return (
    <>
        {/*<div className="navigation position-sticky top-0">*/}
        {/*    <Navigation />*/}
        {/*</div>*/}
        <Navigation />
        <Home />
    </>
  );
}

export default App;
