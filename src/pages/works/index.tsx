import worksJSON from '<redux>/assets/JSONdata/projects.json'
import TechIcon from '<redux>/components/works/techIcon'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '<redux>/assets/store/store';
import { changeViewWorksOrder } from '<redux>/assets/slices/viewWorksOrderSlice';
import { changeCurrentPage } from '../../assets/slices/pageSlice'

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
    let categoryTitle = <></>

    const workStatus:string[] = ["past", "current", "future"]
    const workCategory:string[] = ["Web Dev", "Data Science", "Other"]
    const sortby:string[] = ["status", "category"]

    const currentViewOrder:string = useSelector((state: RootState) => state.viewWorkOrderChanger.currentOrder)
    const dispatch = useDispatch();

    let pinnedWorks:Work[] = []
    let allWorks:Work[] = []

    worksJSON.forEach(function (value) {
        if (value.pinned == true){
            pinnedWorks.push(value as Work)
        }
        allWorks.push(value as Work)
    }); 

	dispatch(changeCurrentPage('works'))

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

                <h2>Currently viewing works by {currentViewOrder}</h2>
                <button onClick={currentViewOrder == 'status' ? () => dispatch(changeViewWorksOrder('category')) : () => dispatch(changeViewWorksOrder('status'))}>
                    Change View Mode
                </button> 
                {/* onClick={() => dispatch(changeCurrentPage(page.toLowerCase()))}  */}

                {/* CURRENT -> PAST -> FUTURE OR DATA SCIENCE -> WEBDEV -> OTHER*/}
                {currentViewOrder == "status" && workStatus.map(function(status){
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

                            {allWorks.map(function(work) {
                                if (work.status == status){
                                    return (
                                        <div className='project-box' key={work.title}>
                                            <h3>{work.title}</h3>
                                            <p>{work.description}</p>
                                            <div className='project-tech-list'>
                                                <div>
                                                    {work.tools && work.tools.map(function(tool){
                                                        return (<span className='techIcon' key={tool}>
                                                            <TechIcon name={tool}></TechIcon>
                                                        </span>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ) 
                                } else {
                                    return (<></>)
                                }
                            })}
                            
                            </div>
                        </div>
                    </>)
                })}

                {currentViewOrder == "category" && workCategory.map(function(category){
                    switch(category){
                        case "Web Dev":
                            categoryTitle = <h1>Web Development Projects</h1>
                            break
                        case "Data Science":
                            categoryTitle = <h1>Data Science Projects</h1>
                            break
                        case "Other":
                            categoryTitle = <h1>Other Projects</h1>
                            break
                    }
                    return (<>
                            {categoryTitle}
                            <div className="project-container">
                            <div className='project-boxes'>

                            {allWorks.map(function(work) {
                                if (work.category == category){
                                    return (
                                        <div className='project-box' key={work.title}>
                                            <h3>{work.title}</h3>
                                            <p>{work.description}</p>
                                            <div className='project-tech-list'>
                                                <div>
                                                    {work.tools && work.tools.map(function(tool){
                                                        return (<span className='techIcon' key={tool}>
                                                            <TechIcon name={tool}></TechIcon>
                                                        </span>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ) 
                                } else {
                                    return (<></>)
                                }
                            })}
                            
                            </div>
                        </div>
                    </>)
                })}

            </div>
        </div>
    )
  }
//   stjune092011
  export default Works;

