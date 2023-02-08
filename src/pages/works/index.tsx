import worksJSON from '<redux>/assets/JSONdata/projects.json'

function Works() {

    worksJSON.sort((a, b) => {
        let dateA = a.date ? new Date(a.date) : new Date();
        let dateB = b.date ? new Date(b.date) : new Date();
        return dateB.getTime() - dateA.getTime();
    });

    const workStatus:string[] = ["current", "past", "future"]
    const sortby:string[] = ["status", "category"]
    
    return (
        <div className="works">
            <div className="project">
                {/* PINNED PROJECTS -> */}
                {worksJSON.map((work) => (
                    <div className="project-container" key={work.title}>
                        <h1 className="project-container-header">
                            {work.title}
                        </h1>
                    </div>
                ))}
                {/* CURRENT -> PAST -> FUTURE OR DATA SCIENCE -> WEBDEV -> OTHER*/}
                {worksJSON.map((work) => (
                    <div className="project-container" key={work.title}>
                        <h1 className="project-container-header">
                            {work.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
  }
//   stjune092011
  export default Works;

