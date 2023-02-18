// import resume from "../../../public/Resume_Frederick_Go.pdf"
import Resume from "./resume";

function About() {
    return (
        <div className="life-section">
            <h1><span>About Me</span></h1>
            <div className="about-me-content">
                <div>
                    <p>Oh. You decided to stay and read more about me. Well, I should welcome you then. :3</p>
                </div>
                <div>
                    <p>I am a senior at&nbsp;
                        <a href="https://www.dal.ca/" target="_blank" rel="noreferrer"><span>Dalhousie University</span></a>&nbsp;studying&nbsp;
                        <a href={"../../../public/Resume_Frederick_Go.pdf"} target="_blank" rel="noreferrer"><span>Computer Science</span></a>.
                    I am planning on pursuing bachelor of computer science along with certificates in&nbsp;
                    <span>Data Science</span>, and&nbsp;
                    <span>Communication Technologies & Cyber Security</span> in 2023.</p>
                    <Resume></Resume>
                </div>
            </div>
        </div>
    )
  }
  
  export default About;