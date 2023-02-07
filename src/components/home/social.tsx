import Image from "next/image";

function Social() {
    return (
        <div className="main-social">
            <a className="contact-social" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">
            <img alt="Frederick's LinkedIN" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
            </a>
            <a className="contact-social" href="https://github.com/itsmefredgo" target="_blank" rel="noreferrer">
                <img alt="Frederick's GitHub" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg" />
            </a>
            <a className="contact-social" href="https://www.instagram.com/itsmefredgo/" target="_blank" rel="noreferrer">
                <img alt="Frederick's Instagram" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
            </a>
        </div>   
    )  
}

export default Social;