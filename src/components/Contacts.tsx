import '@/css/Contacts.css'
import Mail from '@/images/envelope.svg'
import Phone from '@/images/telephone.svg'
import Contact from './Contact'

export default function Contacts({ref} : {ref : React.RefObject<HTMLElement | null>}){
    return (
        <section id="contacts" ref={ref}>
            <h1>Contacts</h1>
            <div className="contact-information">
                <Contact 
                    name="Email"
                    icon={Mail}
                    link="mailto:Jason_Nguyen14@yahoo.com"
                    content="Jason_Nguyen14@yahoo.com"
                />
                <Contact 
                    name="Mobile"
                    icon={Phone}
                    link="tel:+19514623698"
                    content="+1 (951) 462-3698"
                />
                <Contact 
                    name="LinkedIn"
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    link="https://www.linkedin.com/in/jasonnguyen01"
                    content="https://www.linkedin.com/in/jasonnguyen01"
                />
                <Contact 
                    name="Github"
                    icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    link="https://github.com/JasonNguyenQ"
                    content="https://github.com/JasonNguyenQ"
                />
            </div>
        </section>
    )
}