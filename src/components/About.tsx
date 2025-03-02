import '../public/css/About.css'

export default function About(){
    return (
        <section id="about">
            <div className="description">
                <h1>Hello, I'm Jason Nguyen!</h1>
                <p className="title">Software Developer</p>
                <p className="passion">I am passionate about full-stack development and I am constantly learning and figuring out new innovative ways to solve problems.</p>
                <button>View Projects</button>
            </div>
            <img className='profile-picture' src="" alt='profile picture'/>
        </section>
    )
}