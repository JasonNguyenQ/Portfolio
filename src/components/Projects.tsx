import Card from './Cards'
import p1 from '../public/images/Social-Media-App-Snapshot.png'
import p2 from '../public/images/Scientific-Text-Classifier-Snapshot.png'
import p3 from '../public/images/Medical-Search-Engine-Snapshot.png'
import '../public/css/Projects.css'

export default function Projects({ref} : {ref : React.RefObject<HTMLElement | null>}){
    return (
        <section id="projects" ref={ref}>
            <h1>Projects</h1>
            <div className="card-container">
                <Card 
                    title="Social Media App"
                    subtitle="HTML CSS JS/TS React Express.js MySQL"
                    image={p1}
                    content="A social media app that allows for instantaneous transmission of messages between many different users"
                    link={undefined}
                    date={"Febuary 2025 - Present"}
                />
                <Card 
                    title="Scientific Text Classifier"
                    subtitle="Python Matplotlib Pandas NumPy"
                    image={p2}
                    content="A text classifier that distinguishes between different scientific categories (e.g. Physics, Computer Science, Mathematics)"
                    link={undefined}
                    date={"October 2024 - December 2024"}
                />
                <Card 
                    title="Medical Search Engine"
                    subtitle="HTML CSS JS Python Flask React"
                    image={p3}
                    content="A search engine that displays the most relevant URLs pertaining all of your medical inquiries"
                    link="https://github.com/EinarGatc/Medical-Search-Engine"
                    date={"June 2024 - September 2024"}
                />
                <Card 
                    title="Asteroids"
                    subtitle="C++"
                    image={undefined}
                    content="An Asteroids-like game made with a ST7735 display, joystick modules, shift registers etc., where users can fire a laser to destroy incoming asteroids"
                    link={undefined}
                    date={"May 2024 - June 2024"}
                />
                <Card 
                    title="9-to-5 Game"
                    subtitle="C#"
                    image={undefined}
                    content="A game made on Unity where players fight their corporate enemies in order to finally make it to a top level where they take on the boss"
                    link={undefined}
                    date={"April 2024 - July 2024"}
                />
            </div>
        </section>
    )
}