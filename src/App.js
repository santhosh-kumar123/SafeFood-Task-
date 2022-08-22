import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Routes from './routes/Routes';
import "./App.css"
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App