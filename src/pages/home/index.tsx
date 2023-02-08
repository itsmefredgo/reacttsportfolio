// Required NextJS components imported
import { useDispatch } from "react-redux";
import { changeCurrentPage } from '../../assets/slices/pageSlice'

// Page molecules imported
import Introduction from '<redux>/components/home/introduction';
import Addition from '<redux>/components/home/introduction-addition';
import Works from '<redux>/components/home/contact';
import Social from '<redux>/components/home/social';
import Projects from '<redux>/components/home/works';

function Home() {
    const dispatch = useDispatch()
	dispatch(changeCurrentPage('home'))

    return (
        <div className="home">
            <Introduction></Introduction> {/* An introduction: Give a brief overview of who you are, what you do, and what you bring to the table. */}
            <Addition></Addition> {/* Skills and areas of expertise: Highlight your key skills and areas of expertise that are relevant to your portfolio. */}
            <Projects></Projects> {/* Project showcase: Display a selection of your best projects, with screenshots and short descriptions. */}
            <Works></Works> {/* Contact information: Provide a way for visitors to get in touch with you, such as an email address, phone number, or social media links. */}
            <Social></Social> {/* Call-to-action (CTA): Encourage visitors to explore your website further by inviting them to check out your projects or contact you for more information. */}
        </div>
    )
  }
  
  export default Home;