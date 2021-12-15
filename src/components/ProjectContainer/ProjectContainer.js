import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";
import { Button } from "@material-ui/core";


const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>
    <div class="card 1">
      <div class="card_image" >
        {" "}
        <img src={project.pic} ></img>{" "}
      </div>
    </div>
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCodeReact && (
      <a
        href={project.sourceCodeReact}
        target="_blank"
        aria-label="source code"
        className="link link--icon"
      >
        <Button style={{color:"white" ,border:"3px solid white"}} className="btn btn--outline">Fronend 
        <GitHubIcon style={{paddingLeft:"3px"}}/>
        </Button>
      </a>
    )}
    {project.sourceCodeNode && (
      <a
        href={project.sourceCodeNode}
        target="_blank"
        aria-label="source code"
        className="link link--icon"
      >
        <Button style={{color:"white" ,border:"3px solid white"}} className="btn btn--outline">Backend 
        <GitHubIcon style={{paddingLeft:"3px"}} />
        </Button>
        
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        target="_blank"
        aria-label="live preview"
        className="link link--icon"
      >
        <Button style={{color:"white" ,border:"3px solid white" ,top:"3px"}} className="btn btn--outline">Live
        <LaunchIcon style={{paddingLeft:"3px"}}/>
        </Button>
      </a>
    )}
  </div>
);

export default ProjectContainer;
