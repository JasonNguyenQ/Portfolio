import '@/css/Skill.css'

export default function Skill(
    {icon, name, proficiency, preferred}:
    {
        icon: string,
        name: string,
        proficiency: string,
        preferred: boolean | undefined
    }
){
    return (
        <div className="skill">
            <img src={icon} alt={name}/>
            <div className="description">
                <header>
                    <h2>{name}</h2>
                    {preferred && <p className="preferred">(preferred)</p>}
                </header>
                <p>{proficiency}</p>
            </div>
        </div>
    );
}