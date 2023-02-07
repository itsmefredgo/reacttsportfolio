import Link from "next/link";

function introduction() {
    return (
        <Link href="/contact">
            <div className="main-projects-link">
                You can contact me via these methods!
            </div>
        </Link>
    )  
}

export default introduction;