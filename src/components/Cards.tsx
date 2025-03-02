import '../public/css/Card.css'

export default function Card(
    { title, subtitle, content, image } : { title: string, subtitle: string, content: string, image: string }
) {
    return (
        <div className="card">
            <img src={image} alt="No Preview Available"/>
            <div className="content">
                <div>
                    <header>
                        <h3>{title}</h3>
                        <em>{subtitle}</em>
                    </header>
                    <p>{content}</p>
                </div>
                <button>View Project</button>
            </div>
        </div>
    )
}