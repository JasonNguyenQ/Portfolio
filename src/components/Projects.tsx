import Card from './Cards'
import p1 from '../public/images/Social-Media-App-Snapshot.png'
import p2 from '../public/images/Scientific-Text-Classifier-Snapshot.png'
import p3 from '../public/images/Medical-Search-Engine-Snapshot.png'
import '../public/css/Projects.css'

export default function Projects(){
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="card-container">
                <Card 
                    title="Social Media App"
                    subtitle="HTML, CSS, JS/TS, React, Express.js, MySQL"
                    image={p1}
                    content="A social media app that allows for instantaneous transmission of messages between many different users"
                />
                <Card 
                    title="Scientific Text Classifier"
                    subtitle="Python, Matplotlib, Pandas, NumPy"
                    image={p2}
                    content="A text classifier that distinguishes between different scientific categories (e.g. Physics, Computer Science, Mathematics)"
                />
                <Card 
                    title="Medical Search Engine"
                    subtitle="HTML, CSS, JS, Python, Flask, React"
                    image={p3}
                    content="A search engine that displays the most relevant URLs pertaining all of your medical inquiries"
                />
                <Card 
                    title="Asteroids"
                    subtitle="C++"
                    image={""}
                    content="An Asteroids-like game made with a ST7735 display, joystick modules, shift registers etc., where users can fire a laser to destroy incoming asteroids"
                />
                <Card 
                    title="9-to-5 Game"
                    subtitle="C#"
                    image={""}
                    content="A game made on Unity where players fight their corporate enemies in order to finally make it to a top level where they take on the boss"
                />
            </div>
        </section>
    )
}