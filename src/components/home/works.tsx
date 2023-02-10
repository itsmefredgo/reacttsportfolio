import worksJSON from '<redux>/assets/JSONdata/projects.json'
import TechIcon from '<redux>/components/works/techIcon'
import Link from 'next/link';
import { useState } from 'react';
import { TbArrowBigRightLines, TbArrowBigLeftLines } from 'react-icons/tb'
import { RxDotFilled } from 'react-icons/rx'

function Projects() {

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
    function prevWork(){
        leftArrowAnimate()
        setCurrentWorkIndex(currentWorkIndex == 0 ? pinLength - 1 : currentWorkIndex - 1)
    }
    function nextWork(){
        rightArrowAnimate()
        setCurrentWorkIndex(currentWorkIndex == pinLength - 1 ? 0 : currentWorkIndex + 1)
        
    }

    let [rightArrowClicked, setRightArrawClicked] = useState(false)

    function rightArrowAnimate(){
        setRightArrawClicked(true)
        setTimeout(() => {
            setRightArrawClicked(false)
        }, 500);
    }

    let [leftArrowClicked, setLeftArrawClicked] = useState(false)

    function leftArrowAnimate(){
        setLeftArrawClicked(true)
        setTimeout(() => {
            setLeftArrawClicked(false)
        }, 500);
    }

    return (
        <div className="main-projects">
            <div className="main-projects-head">Pinned Works</div>
            <div className='main-projects-slide'>
                <div className="main-projects-button-parent">
                    <div className={leftArrowClicked == false ? 'main-projects-slide-button' : 'main-projects-slide-button rightclicked'} onClick={() => prevWork()}>
                        <TbArrowBigLeftLines className="main-projects-button-parent-but"/>
                    </div>
                </div>
                <div className="main-projects-list">
                    {pinnedWorks.map(function(work, index) {
                            return (
                                <div className={currentWorkIndex == index ? 'project-boxs pb-animation-active' : 'project-boxs pb-animation-non'} key={work.title}>
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
                        } 
                    )}
                </div>
                <div className="main-projects-button-parent">
                    <div className={rightArrowClicked == false ? 'main-projects-slide-button' : 'main-projects-slide-button leftclicked'} onClick={() => nextWork()}>
                        <TbArrowBigRightLines className="main-projects-button-parent-but"/>
                    </div>
                </div>
            </div>
            <div className='main-projects-numbers'>
                {pinnedWorks.map(function(work, index){
                    return (<RxDotFilled key={work.title} className={currentWorkIndex == index ? 'main-projects-list-current-dot ' : ''}/>)
                })}
            </div>
            <div className="main-projects-link">
                <Link href="/works">
                    View all works
                </Link>
            </div>
        </div>
    )  
}

export default Projects;