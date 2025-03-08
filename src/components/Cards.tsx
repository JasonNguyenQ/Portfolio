import "@/css/Card.css";

export default function Card({
	title,
	subtitle,
	content,
	image,
	link,
	date,
}: {
	title: string;
	subtitle: string;
	content: string;
	image: string | undefined;
	link: string | undefined;
	date: string;
}) {
	const colorMap = [
		"hsl(240,100%,90%)",
		"hsl(0,100%,90%)",
		"hsl(60,100%,90%)",
		"hsl(120,100%,90%)",
		"hsl(180,100%,90%)",
		"hsl(320,100%,90%)",
	];

	return (
		<div className="card">
			<div className="image-container">
				<img src={image} alt="No Preview Available" />
			</div>
			<div className="content">
				<div>
					<header>
						<h2>{title}</h2>
						<div className="technologies">
							{subtitle.split(" ").map((tech, index) => {
								return (
									<em
										className="technology"
										key={index}
										style={{
											backgroundColor: colorMap[index % colorMap.length],
										}}
									>
										{tech}
									</em>
								);
							})}
						</div>
					</header>
					<p>{content}</p>
				</div>
				<div className="additionals">
					<button
						disabled={link === undefined || link.length === 0}
						onClick={() => {
							if (link) window.open(link);
						}}
					>
						{link?.length! > 0 ? "View Project" : "Unavailable"}
					</button>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
}
