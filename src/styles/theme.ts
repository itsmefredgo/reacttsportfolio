import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    primaryBackground: "white", // light light white
    secondaryBackground: "#f0efef", // light white
    fontColor: "black", 
	projectBoxBackground: "#FAFAEF", // light baige
    projectBoxBorder: "#E1E1B8", // white
	keyWordColor: "#5CBA82", // dark green
    oppositeColor: "black",
};

export const darkTheme = {
    primaryBackground: "#161b22", // dark blue
    secondaryBackground: "#0d1117", // dark dark blue
    fontColor: "#C0C0C0", // light gray
	projectBoxBackground: "#1E2327", // dark grey
    projectBoxBorder: "#232F3E", // navy
    keyWordColor: "#E5A5FF", // light purple
    oppositeColor: "white",
};

export const GlobalStyle = createGlobalStyle`
	// Change all font colors
	*{
		transition: all 0.25s linear;
		color: ${props => props.theme.fontColor};
	}
	// Primary Background Changing
	.header, .footer, .body, .select-dark-mode{
		background-color: ${props => props.theme.primaryBackground};
	}
	body {
		background: ${props => props.theme.primaryBackground};
	}
	// Project boxes
	.project-box{
		background-color: ${props => props.theme.projectBoxBackground};
		border: 1px solid ${props => props.theme.projectBoxBorder};
	}
	// Header Body Footer separator colors
	.header, .body{
    	border-bottom: 1px solid ${props => props.theme.fontColor};
  	}
	// Sub section links in My life border
	.detailed-timeline-link {
		border: 0.25rem dotted ${props => props.theme.keyWordColor};
	}
	.contact-social{
		background-color: ${props => props.theme.keyWordColor};
	}
	.main-introduction-addition, .main-introduction-photo-bg, .main-projects{
		background-color: ${props => props.theme.secondaryBackground};
	}
	.location-link {
		color: ${props => props.theme.keyWordColor};
	}
	.vertical-timeline-element-date {
		color: ${props => props.theme.oppositeColor};
	}
	
	
	
	// My life section key word constant color change
	@keyframes text-alt-dark {
		0% {color: ${props => props.theme.fontColor};}
		100% {color: ${props => props.theme.keyWordColor};;}
	}
`