import { Link } from 'react-router-dom';
import '@/css/Contact.css'

export default function Contact(
    {name, icon, link, content}:
    {
        name: string,
        icon: string,
        link: string,
        content: string,
    }
){
    return (
        <div className="contact">
            <img src={icon} alt={name}/>
            <Link to={link} target='_blank'>{content} • {name}</Link>
        </div>
    );
}