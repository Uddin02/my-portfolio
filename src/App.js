import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';

import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Shared/Navbar';
import Landing from './pages/LandingPage/Landing';
// import router from './Routes/Routes';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path="#home" element={<Home />} />
        <Route path="#aboutme" element={<AboutMe />} />
        <Route path='/landing#projects' element={<Projects/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
