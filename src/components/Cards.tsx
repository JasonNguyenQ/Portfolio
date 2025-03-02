import '../public/css/Card.css'

export default function Card(
    { title, subtitle, content, image, link } : 
    { title: string, subtitle: string, content: string, image: string | undefined, link: string | undefined}
) {

    return (
        <div className="card">
            <img src={image} alt="No Preview Available"/>
            <div className="content">
                <div>
                    <header>
                        <h2>{title}</h2>
                        <em>{subtitle}</em>
                    </header>
                    <p>{content}</p>
                </div>
                <button 
                    disabled={link === undefined || link.length === 0}
                    onClick={()=>{if (link) window.open(link)}}>
                        {link?.length! > 0 ? "View Project" : "Unavailable"}
                </button>
            </div>
        </div>
    )
}