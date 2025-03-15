import { Link } from "react-router-dom";
import "@/css/Contact.css";

export default function Contact({
	name,
	icon,
	link,
	content,
}: {
	name: string;
	icon: string;
	link: string;
	content: string;
}) {
	return (
		<Link className="contact" to={link} target="_blank">
			<img src={icon} alt={name} />
			{content} • {name}
		</Link>
	);
}
