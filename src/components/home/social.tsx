import { FaDocker } from 'react-icons/fa'

function Social() {
    return (
        <div className="main-social">
            <a className="contact-social" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">
                <img alt="Frederick's LinkedIN" className="contact-social-img" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
            </a>
            <a className="contact-social" href="https://github.com/itsmefredgo" target="_blank" rel="noreferrer">
                <img alt="Frederick's GitHub" className="contact-social-img" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg" />
            </a>
            <a className="contact-social" href="https://hub.docker.com/u/fredd317" target="_blank" rel="noreferrer">
                <FaDocker className="contact-social-img docker-icon" width="22px"></FaDocker>
            </a>
            <a className="contact-social" href="https://www.instagram.com/itsmefredgo/" target="_blank" rel="noreferrer">
                <img alt="Frederick's Instagram" className="contact-social-img" width="22px" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
            </a>
        </div>   
    )  
}

export default Social;