// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./assets/hero-light.jpg";
import HeroDark from "./assets/hero-dark.jpg";
import javawork from "./assets/java3.png";
import fullstack from "./assets/full-stack.png";
import pro from "./assets/pro.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

//LinkedIn url
export const linkedinurl = "https://www.linkedin.com/in/edwin-ye/";

//GitHub username
export const githubUsername = "Trickybrain";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;


// Resume link (string - "https://YourResumeUrl") - CloudFront
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["BasicFullStackSkills", "EdwinProfileForJava", "ProfessionalWork"];

// Defualt GitHub image
export const projectCardImages = [
  {
    name: "EdwinProfileForJava",
    image: javawork,
  },
  {
    name: "BasicFullStackSkills",
    image: fullstack,
  },
  {
    name: "ProfessionalWork",
    image: pro,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mkndblqv";
