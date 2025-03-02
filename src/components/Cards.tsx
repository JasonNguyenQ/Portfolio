import '../public/css/Card.css'

export default function Card(
    { title, subtitle, content, image, link } : 
    { title: string, subtitle: string, content: string, image: string, link: string }
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
                <button 
                    disabled={link.length === 0}
                    onClick={()=>{window.open(link)}}>
                        {link.length > 0 ? "View Project" : "Unavailable"}
                </button>
            </div>
        </div>
    )
}