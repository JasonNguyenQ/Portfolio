import "@/css/Navbar.css";
import Resume from "../public/Resume.pdf";

export default function Navbar({
	nav,
	about,
	education,
	projects,
	skills,
	contacts,
}: {
	nav: React.RefObject<HTMLElement | null>;
	about: React.RefObject<HTMLElement | null>;
	education: React.RefObject<HTMLElement | null>;
	projects: React.RefObject<HTMLElement | null>;
	skills: React.RefObject<HTMLElement | null>;
	contacts: React.RefObject<HTMLElement | null>;
}) {
	function handleScroll(element: string) {
		const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
			about: about,
			education: education,
			projects: projects,
			skills: skills,
			contacts: contacts,
		};

		const start =
			refMap[element].current!.getBoundingClientRect().top + //Relative offset from current viewport screen
			window.scrollY - //Absolute offset of current screen relative to entire doc
			nav.current!.clientHeight; //Account of sticky positioning of navbar

		window.scrollTo({
			top: start,
			behavior: "smooth",
		});
	}

	return (
		<section id="navbar" ref={nav}>
			<div className="nav-wrapper">
				<ul>
					<li onClick={() => handleScroll("about")}>About</li>
					<li onClick={() => handleScroll("education")}>Education</li>
					<li onClick={() => handleScroll("projects")}>Projects</li>
					<li onClick={() => handleScroll("skills")}>Skills</li>
					<li onClick={() => handleScroll("contacts")}>Contacts</li>
				</ul>
				<a href={Resume} download={"Jason_Nguyen_Full_Stack_Resume.pdf"}>
					Resume
				</a>
			</div>
		</section>
	);
}
