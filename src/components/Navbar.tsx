import { useRef } from 'react';
import '../public/css/Navbar.css'

export default function Navbar(
    {about, education, projects, skills} : 
    {
        about : React.RefObject<HTMLElement | null>,
        education : React.RefObject<HTMLElement | null>,
        projects : React.RefObject<HTMLElement | null>,
        skills : React.RefObject<HTMLElement | null>,
    }){
    const navRef = useRef<HTMLElement>(null)

    function handleScroll(element: string){
        const refMap : Record<string, React.RefObject<HTMLElement | null>> = {
            'about' : about,
            'education': education,
            'projects' : projects,
            'skills' : skills
        }

        const start = 
        refMap[element].current!.getBoundingClientRect().top + //Relative offset from current viewport screen
        window.scrollY - //Absolute offset of current screen relative to entire doc
        navRef.current!.clientHeight //Account of sticky positioning of navbar
        
        window.scrollTo({
            top: start,
            behavior: 'smooth'
        });
    }

    return (
        <section id="navbar" ref={navRef}>
            <ul>
                <li onClick={()=>handleScroll('about')}>About</li>
                <li onClick={()=>handleScroll('education')}>Education</li>
                <li onClick={()=>handleScroll('projects')}>Projects</li>
                <li onClick={()=>handleScroll('skills')}>Skills</li>
                <li onClick={()=>handleScroll('contact')}>Contact</li>
            </ul>
        </section>
    )
}