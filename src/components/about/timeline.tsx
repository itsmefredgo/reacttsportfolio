// import { VerticalTimeline, VerticalTimelineElement }  from "../../../node_modules/react-vertical-timeline-component";
import dynamic from 'next/dynamic';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';

const TimelineImport = dynamic(
    () => {
        return import("react-vertical-timeline-component").then(mod => VerticalTimelineElement);
    }, 
    {ssr: false}
);

import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
        <div className="Test">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Mar 2002 - Aug 2013"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Hi there</h3>
                    <h4 className="vertical-timeline-element-subtitle">Busan/Geoje, South Korea</h4>
                    <p>
                        Born in Busan, South Korea, then moved to Geoje. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2013 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Hello, Canada!</h3>
                    <h4 className="vertical-timeline-element-subtitle">Halifax, NS</h4>
                    <p>
                        Moved to Halifax, Nova Scotia, Canada.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jun 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Graduated High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School, Halifax, NS</h4>
                    <p>
                        Graduated high school: Halifax Grammar School with High Honours<br/>
                        - High Honours given to students successfully finishing with 90% average or above.<br/>
                        - Received International Baccalaureate Full Diploma
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Sep 2020 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dalhousie University, Halifax, NS</h4>
                    <p>
                        Studying Computer Science at Dalhousie University<br/>
                        CGPA: 4.15 (as of Winter 2023)<br/>
                        Working on certificates in:<br/>
                        - Data Science<br/>
                        - Communication Technologies & Cyber Security<br/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Dec 2022 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Full-stack Web Developer / Part-time</h3>
                    <h4 className="vertical-timeline-element-subtitle">St. Joseph’s Children’s Centre, Halifax, NS</h4>
                    <p>
                        - Developing / maintaining current website via WordPress platform & PHP.<br/>
                        - Effectively addressed multiple challenges arising from prior neglect of the site and fixed.<br/>
                        - Presently rebuilding the entire website from stretch with the aim of elevating quality of service using React.<br/>
                        - Donating my knowledge and skills in web development and contributing to the support of those in need.<br/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Apr 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Graduation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dalhousie University, Halifax, NS</h4>
                    <p>
                        Planning on Graduating in May 2023.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: "none" }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2023 - ???"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Where next?</h3>
                    <h4 className="vertical-timeline-element-subtitle">???</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
            Test Page
        </div>
    )
  }
  
  export default Timeline;