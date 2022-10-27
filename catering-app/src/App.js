import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'

import MainNav from './components/MainNav'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
        <MainNav />
      </div>
      main comp
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
