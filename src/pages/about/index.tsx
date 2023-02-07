import Test from "../../components/about/test";
import Hello from "../../components/about/hello";

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