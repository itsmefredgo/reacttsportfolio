// Photos imported
import frederick_snow_1 from '../../assets/images/home/frederick-snow-1.jpeg'
import frederick_band_1 from '../../assets/images/home/frederick-band-1.jpeg'

// Required NextJS components imported
import Link from 'next/link';

function Home() {
    return (
        <div className="home">
            <div className="main-introduction">
                <div className="main-introduction-left">
                    <div className="main-introduction-photo">
                        <img className="main-introduction-photo-item" src={frederick_snow_1.src} alt="Frederick Go"></img>
                    </div>
                    <div className="main-introduction-photo-bg"></div>
                </div>
                <div className="main-introduction-right">
                    <div className="main-introduction-paragraph">
                        <div className='text'>Hi there, my name is Donghyeon (Frederick/Fred) Go :)</div>
                        <div>Data Scientist + Web Dev + Programmer</div>
                        <div>Nice to see you.</div>
                    </div>
                </div>
            </div>
            
            <div className="main-introduction-addition">
                <div className="main-introduction-addition-words">
                    <div className="main-introduction-addition-header">
                        My Education
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Senior at Dalhousie University
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Studying Computer Science and Statistics
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Data Science Certificate
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Communication Technologies & Cyber Security Certificate
                    </div>
                    <Link href="/about">
                        <div className="main-introduction-addition-paragraph main-introduction-addition-link"> 
                            View more about my education here
                        </div>
                    </Link>
                </div>
                <div className="main-introduction-addition-photo">
                    <img className="main-introduction-addition-photo-item" src={ frederick_band_1.src } alt="Frederick Go"></img>
                </div>
            </div>

            {/* <div className="main-projects">
                <div className="main-projects-head">
                    My Pinned Projects
                </div>
                <div className="main-projects-list">
                    {projectList.map((project) => {
                        if ("Pinned Projects" === project.status){
                            return(
                                <div className="project-box">
                                    <h3 className="project-title">
                                        {project.name}
                                    </h3>
                                    <p>
                                        {project.description} <br/>
                                    </p>
                                    <div className="project-tech-list">
                                        <TechIconList techList={project.technology}/>
                                    </div>
                                </div>
                            )
                        } else {return <></>}
                    })}
                </div>
                <div className="main-projects-link">
                    <Link to="/home/Projects">
                        View all projects
                    </Link>
                </div>
            </div> */}

            <div className="main-contact">
                <div>
                    <div>
                    Oh, you've come down this far. 'O'<br/>
                    Wow!<br/>
                    </div>
                    <Link href="/contact">
                        <div className="main-projects-link">
                            You can contact me via these methods!
                        </div>
                    </Link>
                </div>
            </div>

            <div className="main-social">
                <a className="contact-social" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">
                <img alt="Frederick's LinkedIN" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
                </a>
                <a className="contact-social" href="https://github.com/itsmefredgo" target="_blank" rel="noreferrer">
                    <img alt="Frederick's GitHub" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg" />
                </a>
                <a className="contact-social" href="https://www.instagram.com/itsmefredgo/" target="_blank" rel="noreferrer">
                    <img alt="Frederick's Instagram" width="22px" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
                </a>
            </div>     
        </div>
    )
  }
  
  export default Home;



// An introduction: Give a brief overview of who you are, what you do, and what you bring to the table.

// Skills and areas of expertise: Highlight your key skills and areas of expertise that are relevant to your portfolio.

// Project showcase: Display a selection of your best projects, with screenshots and short descriptions.

// Contact information: Provide a way for visitors to get in touch with you, such as an email address, phone number, or social media links.

// Call-to-action (CTA): Encourage visitors to explore your website further by inviting them to check out your projects or contact you for more information.