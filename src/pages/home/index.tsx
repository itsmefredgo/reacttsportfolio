// Required NextJS components imported
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '<redux>/assets/store/store';

// Page molecules imported
import Introduction from '<redux>/components/home/introduction';
import Addition from '<redux>/components/home/introduction-addition';
import Contact from '<redux>/components/home/contact';
import Social from '<redux>/components/home/social';
import Projects from '<redux>/components/home/projects';

function Home() {
    const currentLanguage:string = useSelector((state: RootState) => state.languageChanger.currentLanguage)

    return (
        <div className="home">
            <Introduction></Introduction>
            <Addition></Addition>
            <Projects></Projects>
            <Contact></Contact>
            <Social></Social>  
        </div>
    )
  }
  
  export default Home;



// An introduction: Give a brief overview of who you are, what you do, and what you bring to the table.

// Skills and areas of expertise: Highlight your key skills and areas of expertise that are relevant to your portfolio.

// Project showcase: Display a selection of your best projects, with screenshots and short descriptions.

// Contact information: Provide a way for visitors to get in touch with you, such as an email address, phone number, or social media links.

// Call-to-action (CTA): Encourage visitors to explore your website further by inviting them to check out your projects or contact you for more information.