import '../public/css/Skills.css'
import Icon from './Icon'
import Skill from './Skill'
import { skillMap } from '../constants/globals'

export default function Skills({ref} : {ref : React.RefObject<HTMLElement | null>}){

    return (
        <section id="skills" ref={ref}>
            <h1>Skills & Technologies</h1>
            <div className="skills-slider">
                {skillMap.map((skill, index)=>{
                    return(
                        <Icon name={skill.name} icon={skill.icon} key={index} position={index} amount={skillMap.length}/>
                    );
                })}
            </div>
            <div className="skills-container">
                {skillMap.map((skill)=>{
                    return (
                        <Skill name={skill.name} icon={skill.icon} proficiency={skill.proficiency} preferred={skill.preferred}></Skill>
                    )
                })}
            </div>
        </section>
    )
}