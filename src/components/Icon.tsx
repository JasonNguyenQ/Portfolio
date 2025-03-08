import "@/css/Icon.css";

export default function Icon({
	name,
	icon,
	position,
	amount,
}: {
	name: string;
	icon: string;
	position: number;
	amount: number;
}) {
	const style = {
		"--position": position,
		"--amount": amount,
	} as React.CSSProperties;

	return (
		<div className="icon" style={style}>
			<img src={icon} alt={name} />
			<div className="icon-name">{name}</div>
		</div>
	);
}
