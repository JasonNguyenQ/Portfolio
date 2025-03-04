import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

import { useRef } from 'react'

import './App.css'
import Contact from './components/Contact'

function App() {
  const navElement = useRef<HTMLElement>(null)
  const aboutElement = useRef<HTMLElement>(null)
  const educationElement = useRef<HTMLElement>(null)
  const projectsElement = useRef<HTMLElement>(null)
  const skillsElement = useRef<HTMLElement>(null)
  const contactElement = useRef<HTMLElement>(null)
  
  return (
    <>
      <div className='portfolio'>
        <Navbar 
          nav={navElement}
          about={aboutElement}
          education={educationElement}
          projects={projectsElement}
          skills={skillsElement}
          contact={contactElement}
        />
        <About 
          ref={aboutElement} 
          projects={projectsElement} 
          nav={navElement}/>
        <Education ref={educationElement}/>
        <Projects ref={projectsElement}/>
        <Skills ref={skillsElement}/>
        <Contact ref={contactElement}/>
      </div>
    </>
  )
}

export default App
