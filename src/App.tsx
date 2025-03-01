import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import './App.css'

function App() {
  return (
    <>
      <div className='portfolio'>
        <Navbar/>
        <About/>
        <Education/>
      </div>
    </>
  )
}

export default App
