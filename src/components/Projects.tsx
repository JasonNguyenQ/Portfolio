import Card from "./Cards";
import p1 from "@/images/Social-Media-App-Snapshot.png";
import p2 from "@/images/Scientific-Text-Classifier-Snapshot.png";
import p3 from "@/images/Medical-Search-Engine-Snapshot.png";
import p4 from "@/images/Asteroids-Snapshot.png";
import p5 from "@/images/9-to-5-Snapshot.webp";
import "@/css/Projects.css";

export default function Projects({
	ref,
}: {
	ref: React.RefObject<HTMLElement | null>;
}) {
	return (
		<section id="projects" ref={ref}>
			<h1>Projects</h1>
			<div className="card-container">
				<Card
					title="Social Media App"
					subtitle="HTML CSS JS/TS React Express.js MySQL Redis"
					image={p1}
					content="A social media app that allows for instantaneous transmission of messages between many different users"
					link={"https://github.com/JasonNguyenQ/Social_Media_App_Frontend"}
					date={"Febuary 2025 - May 2025"}
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
					image={p4}
					content="An Asteroids-like game made with a ST7735 display, joystick modules, shift registers etc., where users can fire a laser to destroy incoming asteroids"
					link={undefined}
					date={"May 2024 - June 2024"}
				/>
				<Card
					title="9-to-5 Game"
					subtitle="C#"
					image={p5}
					content="A game made on Unity where players fight their corporate enemies in order to finally make it to a top level where they take on the boss"
					link={undefined}
					date={"April 2024 - July 2024"}
				/>
			</div>
		</section>
	);
}
