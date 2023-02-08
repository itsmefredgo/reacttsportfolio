import Test from "../../components/about/test";
import Hello from "../../components/about/hello";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from '../../assets/slices/pageSlice'

function about() {
	const dispatch = useDispatch()
	dispatch(changeCurrentPage('about'))

    return (
		<div className="about">
			About Page
			<Hello></Hello>
			<Test></Test>
		</div>
  	)
}

export default about;