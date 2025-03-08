import "@/css/About.css";

export default function About({
	ref,
	projects,
	nav,
}: {
	ref: React.RefObject<HTMLElement | null>;
	projects: React.RefObject<HTMLElement | null>;
	nav: React.RefObject<HTMLElement | null>;
}) {
	function handleScroll() {
		const start =
			projects.current!.getBoundingClientRect().top + //Relative offset from current viewport screen
			window.scrollY - //Absolute offset of current screen relative to entire doc
			nav.current!.clientHeight; //Account of sticky positioning of navbar

		window.scrollTo({
			top: start,
			behavior: "smooth",
		});
	}

	return (
		<section id="about" ref={ref}>
			<div className="description">
				<h1>Hello, I'm Jason Nguyen!</h1>
				<p className="title">Software Developer</p>
				<p className="passion">
					I am a recent college graduate who is passionate about full-stack
					development, and I am constantly learning and figuring out new
					innovative ways to solve problems. I am based in{" "}
					<strong>California in the United States of America</strong>, and my
					preferred tech stack includes{" "}
					<strong className="tech-stack">
						MySQL, Express.js, React, and Node.js
					</strong>
					.
				</p>
				<button onClick={handleScroll}>View Projects</button>
			</div>
			<img className="profile-picture" src={undefined} alt="Profile Picture" />
		</section>
	);
}
