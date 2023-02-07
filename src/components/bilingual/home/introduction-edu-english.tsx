import Link from "next/link";

function introduction() {
    return (
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
    )  
}

export default introduction;