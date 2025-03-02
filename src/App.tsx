import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

import { useRef } from 'react'

import './App.css'

function App() {
  const aboutElement = useRef<HTMLElement>(null)
  const educationElement = useRef<HTMLElement>(null)
  const projectsElement = useRef<HTMLElement>(null)
  const skillsElement = useRef<HTMLElement>(null)
  
  return (
    <>
      <div className='portfolio'>
        <Navbar 
          about={aboutElement}
          education={educationElement}
          projects={projectsElement}
          skills={skillsElement}
        />
        <About ref={aboutElement}/>
        <Education ref={educationElement}/>
        <Projects ref={projectsElement}/>
        <Skills ref={skillsElement}/>
      </div>
    </>
  )
}

export default App
