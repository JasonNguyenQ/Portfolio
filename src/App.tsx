import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <div className='portfolio'>
        <Navbar/>
        <About/>
        <Education/>
        <Projects/>
      </div>
    </>
  )
}

export default App
