import worksJSON from '<redux>/assets/JSONdata/projects.json'
import { forEachChild } from 'typescript';
import TechIcon from '<redux>/components/works/techIcon'

function Works() {

    

    interface TechIconName {
        name: string;
    }

    interface Work {
        title: string;
        description: string;
        category: string;
        tools: string[];
        status: string;
        pinned: boolean;
        date: string;
        technology?: undefined;
    }

    worksJSON.sort((a, b) => {
        let dateA = a.date ? new Date(a.date) : new Date();
        let dateB = b.date ? new Date(b.date) : new Date();
        return dateB.getTime() - dateA.getTime();
    });

    let statusTitle = <></>

    const workStatus:string[] = ["current", "past", "future"]
    const sortby:string[] = ["status", "category"]

    let pinnedWorks:Work[] = []
    let allWorks:Work[] = []

    worksJSON.forEach(function (value) {
        if (value.pinned == true){
            pinnedWorks.push(value as Work)
        }
        allWorks.push(value as Work)
    }); 

    function toolLists(list:string[]){
        // if (list.length == 0){
        //     return (<></>)
        // }
        console.log(list)

        if (list != undefined){
            for (let i = 0; i < list.length; i++) {
                list[i]
            }
        }

        // if (list == undefined){
        //     return (<>WAKINRTF</>)
        // } else {
        //     return (<>
        //         {list.forEach((tool) => {
        //             <>sadadasfdasf</>
        //         })}
        //     </>)
        // }
        
    }
    
    return (
        <div className="works">
            <div className="project">
                {/* PINNED PROJECTS -> */}

                <h1>Pinned Works</h1>
                <div className="project-container">
                    <div className='project-boxes'>
                    {pinnedWorks.map((work) => (
                        <div className='project-box' key={work.title}>
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                            <div className='project-tech-list'>
                                <div>
                                {work.tools.map((tool) => (
                                    <span className='techIcon' key={tool}>
                                        <TechIcon name={tool}></TechIcon>
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* CURRENT -> PAST -> FUTURE OR DATA SCIENCE -> WEBDEV -> OTHER*/}
                {workStatus.map(function(status){
                    switch(status){
                        case "current":
                            statusTitle = <h1>Current Project</h1>
                            break
                        case "past":
                            statusTitle = <h1>Past Project</h1>
                            break
                        case "future":
                            statusTitle = <h1>Future Project</h1>
                            break
                    }
                    return (<>
                            {statusTitle}
                            <div className="project-container">
                            <div className='project-boxes'>

                            {allWorks.map((work) => (
                                <div className='project-box' key={work.title}>
                                    <h3>{work.title}</h3>
                                    <p>{work.description}</p>
                                    <div className='project-tech-list'>
                                        <div>
                                            {/* {toolLists(work.tools)} */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            </div>
                        </div>
                    </>)
                })}


                {/* {worksJSON.map((work) => (
                    <div className="project-container" key={work.title}>
                        <h1 className="project-container-header">
                            {work.title}
                        </h1>
                    </div>
                ))} */}
            </div>
        </div>
    )
  }
//   stjune092011
  export default Works;

