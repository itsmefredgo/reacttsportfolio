import worksJSON from '<redux>/assets/JSONdata/projects.json'
import TechIcon from '<redux>/components/works/techIcon'
import Link from 'next/link';
import { useState } from 'react';

function projects() {

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

    let pinnedWorks:Work[] = []
    worksJSON.forEach(function (value) {if (value.pinned == true){pinnedWorks.push(value as Work)}}); 
    
    let [currentWorkIndex, setCurrentWorkIndex] = useState(0)
    const pinLength = pinnedWorks.length
    function prevWork(){setCurrentWorkIndex(currentWorkIndex == 0 ? pinLength - 1 : currentWorkIndex - 1)}
    function nextWork(){setCurrentWorkIndex(currentWorkIndex == pinLength - 1 ? 0 : currentWorkIndex + 1)}

    return (
        <div className="main-projects">
            <div className='main-projects-slide'>
                <div className='main-projects-slide-button' onClick={() => prevWork()}>
                    previous
                </div>
                <div>
                    <div className="main-projects-head">Pinned Works</div>
                    <div className="main-projects-list">
                        {/* {currentWorkIndex} */}
                        {pinnedWorks.map(function(work, index) {
                            if(currentWorkIndex == index){
                                return (
                                    <div className='project-box pb-animation-active' key={work.title} style={{height: "20vh"}}>
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
                                )
                            } else {
                                return null
                            }
                        } 
                        )}
                    </div>
                </div>
                <div className='main-projects-slide-button' onClick={() => nextWork()}>
                    next
                </div>
            </div>
            <div className="main-projects-link">
                    <Link href="/works">
                        View all works
                    </Link>
                </div>
        </div>
    )  
}

export default projects;