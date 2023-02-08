import Link from "next/link";

function introduction() {
    return (
        <Link href="/contact">
            <div className="main-projects-link-left">
                여기서 저와 연결해요!
            </div>
        </Link>
    )  
}

export default introduction;