import { Icon } from "@iconify/react";
import  netLogo  from "./NET_Core_Logo.svg.png";
import  java  from "./java.png";
import  react  from "./react.png";
import  nodejs  from "./nodejs.png";
import  csharpLogo  from "./csharp.png";
import "../styles/global.css"
export const skillData = [
    {
      id: 1,
      skill: <Icon icon="mdi:language-html5" className="display-4" />,
      name: "HTML5",
    },
    {
      id: 2,
      skill: <Icon icon="ion:logo-css3" className="display-4" />,
      name: "CSS3",
    },
    {
      id: 3,
      skill: <Icon icon="fa6-brands:js" className="display-4" />,
      name: "JavaScript",
    },
    {
      id: 4,
      skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
      name: "BootStrap",
    },
    {
      id: 5,
      skill: <img src={react} alt="React Logo" className="skill-logo" />,
      name: "React",
    },
    {
      id: 6,
      skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
      name: "Styled Components",
    },
    {
      id: 7,
      skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
      name: "Redux",
    },
    {
      id: 8,
      skill: <Icon icon="bi:git" className="display-4" />,
      name: "Git",
    },
    {
      id: 9,
      skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
      name: "GitHub",
    },
    {
        id: 10,
        skill: <Icon icon="mdi:cloud" className="display-4" />, 
        name: "Cloud – AWS, Heroku, MongoDB",
      },
      {
        id: 11,
        skill: <Icon icon="mdi:language-c" className="display-4" />, 
        name: "C",
      },
      {
        id: 12,
        skill: <img src={csharpLogo} alt="C# Logo" className="skill-logo" />,
        name: "C#",
      },
      {
        id: 13,
        skill: <img src={netLogo} alt=".Net Logo" className="skill-logo" />, 
        name: ".Net",
      },
      {
        id: 14,
        skill: <Icon icon="mdi:database" className="display-4" />,
        name: "SQL",
      },
      {
        id: 15,
        skill: <Icon icon="mdi:api" className="display-4" />, // Generic for RESTful API
        name: "RESTful API",
      },
      {
        id: 16,
        skill: <img src={nodejs} alt="Node.js Logo" className="skill-logo" />, 
        name: "Node.js",
      },
      {
        id: 17,
        skill: <Icon icon="mdi:language-cpp" className="display-4" />,
        name: "C++",
      },
      {
        id: 18,
        skill: <img src={java} alt="Java Logo" className="skill-logo" />,
        name: "Java",
      },
  ];