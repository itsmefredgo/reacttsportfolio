import Courses from "<redux>/components/about/courses";
import AboutMe from "<redux>/components/about/about";
import Language from "<redux>/components/about/language";
import Timeline from "<redux>/components/about/timeline";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from '../../assets/slices/pageSlice'

function About() {
	const dispatch = useDispatch()
	dispatch(changeCurrentPage('about'))

    return (
		<div className="about">
			About Page
			<AboutMe></AboutMe>
			<Timeline></Timeline>
			<Language></Language>
			<Courses></Courses>
		</div>
  	)
}

export default About;