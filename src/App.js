import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Home from './Components/Home/Home';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Navbar from './Components/Shared/Navbar';
import Landing from './pages/LandingPage/Landing';


function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path="#home" element={<Home />} />
        <Route path="#aboutme" element={<AboutMe />} />
        <Route path='#services' element={<Services/>} />
        <Route path='#projects' element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
