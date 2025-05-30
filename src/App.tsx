import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

import { useRef } from "react";

import "./App.css";

function App() {
	const navElement = useRef<HTMLElement>(null);
	const aboutElement = useRef<HTMLElement>(null);
	const educationElement = useRef<HTMLElement>(null);
	const projectsElement = useRef<HTMLElement>(null);
	const skillsElement = useRef<HTMLElement>(null);
	const contactsElement = useRef<HTMLElement>(null);

	return (
		<>
			<div className="portfolio">
				<Navbar
					nav={navElement}
					about={aboutElement}
					education={educationElement}
					projects={projectsElement}
					skills={skillsElement}
					contacts={contactsElement}
				/>
				<About ref={aboutElement} projects={projectsElement} nav={navElement} />
				<Education ref={educationElement} />
				<Projects ref={projectsElement} />
				<Skills ref={skillsElement} />
				<Contacts ref={contactsElement} />
			</div>
		</>
	);
}

export default App;
