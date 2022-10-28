import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'

import MainNav from './components/MainNav'
import Home from './components/Home';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      <div>
        <MainNav />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sample' element={<Sample />} />
      </Routes>
    </div>
  );
}

export default App;
