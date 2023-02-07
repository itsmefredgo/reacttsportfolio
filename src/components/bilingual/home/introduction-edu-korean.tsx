import Link from "next/link";

function introduction() {
    return (
        <div className="main-introduction-addition-words">
            <div className="main-introduction-addition-header">
                My Education
            </div>
            <div className="main-introduction-addition-paragraph">
                달하우지 대학교 4학년
            </div>
            <div className="main-introduction-addition-paragraph">
                컴퓨터 사이언스 전공 / 통계학 부전공
            </div>
            <div className="main-introduction-addition-paragraph">
                데이터 과학 자격증 by 달하우지
            </div>
            <div className="main-introduction-addition-paragraph">
                통신 기술 및 사이버 보안 자격증 by 달하우지
            </div>
            <Link href="/about">
                <div className="main-introduction-addition-paragraph main-introduction-addition-link"> 
                    더 보기
                </div>
            </Link>
        </div>
    )  
}

export default introduction;