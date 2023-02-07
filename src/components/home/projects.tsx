function projects() {
    return (<>
        {/* <div className="main-projects">
            <div className="main-projects-head">
                My Pinned Projects
            </div>
            <div className="main-projects-list">
                {projectList.map((project) => {
                    if ("Pinned Projects" === project.status){
                        return(
                            <div className="project-box">
                                <h3 className="project-title">
                                    {project.name}
                                </h3>
                                <p>
                                    {project.description} <br/>
                                </p>
                                <div className="project-tech-list">
                                    <TechIconList techList={project.technology}/>
                                </div>
                            </div>
                        )
                    } else {return <></>}
                })}
            </div>
            <div className="main-projects-link">
                <Link to="/home/Projects">
                    View all projects
                </Link>
            </div>
        </div> */}
        </>
    )  
}

export default projects;