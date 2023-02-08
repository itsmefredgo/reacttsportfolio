import worksJSON from '<redux>/assets/JSONdata/projects.json'
import TechIcon from '<redux>/components/works/techIcon'
import Link from 'next/link';

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

    worksJSON.forEach(function (value) {
        if (value.pinned == true){
            pinnedWorks.push(value as Work)
        }
    }); 

    return (
        <div className="main-projects">
            <div className='main-projects-slide'>
                <div className='main-projects-slide-button'>
                    previous
                </div>
                <div>
                    <div className="main-projects-head">Pinned Works</div>
                    <div className="main-projects-list">
                        
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
                <div className='main-projects-slide-button'>
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