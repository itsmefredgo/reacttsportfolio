import Test from "../../components/includes/about/test";
import Hello from "../../components/includes/about/hello";

function about() {
    return (
		<div className="about">
			About Page
			<Hello></Hello>
			<Test></Test>
		</div>
  	)
}

export default about;