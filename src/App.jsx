import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Contact from './components/Contact'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
      <section id="center">
        <div className="hero">


         {/* <Navbar />
         <Home /> */}
         
         <BrowserRouter>
          < Navbar />
         <Routes>

          <Route path='/' element= { < Home />}></Route>
          <Route path='/about' element= { < About />}></Route>
          <Route path='/services' element = { < Services />}></Route>
          <Route path='/contact' element = { < Contact />}></Route>
          <Route path='/profile' element = { < Profile />}></Route>
         </Routes>
         </BrowserRouter>
         
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

    </>
  )
}

export default App
