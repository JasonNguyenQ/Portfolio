import '../public/css/Contact.css'

export default function Contact({ref} : {ref : React.RefObject<HTMLElement | null>}){
    return (
        <section id="contact" ref={ref}>
            <h2>Contact</h2>
        </section>
    )
}