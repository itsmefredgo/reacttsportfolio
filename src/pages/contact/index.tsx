import { useDispatch } from "react-redux";
import { changeCurrentPage } from '../../assets/slices/pageSlice'

function Contact() {
	const dispatch = useDispatch()
	dispatch(changeCurrentPage('contact'))

    return (
		<div className="contact">
			Contact Page
		</div>
  	)
}

export default Contact;