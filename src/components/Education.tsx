import '../public/css/Education.css'
import UCR from '../public/images/UCR.jpg'

export default function Education(){
    return (
        <section id="education">
            <header>
                <h2>Education</h2>
                <em>September 2021 - December 2024</em>
            </header>
            <div className="description">
                <img width={700} src={UCR} alt="school image"/>
                <ul>
                    <li>Attended University of California, Riverside in September of 2021 and graduated 3 years later in December of 2024 with a Bachelor's of Science in Computer Science</li>
                    <li>Learned about topics including natural language processing, embedded systems, operating systems, machine learning, data analysis methods, database management systems, and more</li>
                    <li>Received Regents Scholarship, awarded Chancellor's Honors List for 2 Semesters, and awarded Dean's Honors List for 7 semesters</li>
                </ul>
            </div>
        </section>
    )
}