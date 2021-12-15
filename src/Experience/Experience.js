import React from "react";
import './Experience.css'
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';
import events from "./events.json";

function Experience() {
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <h2 className="section__title" id='experience'>Professional Experience</h2>
        <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>

        </div>
     
    </div>
  );
}

export default Experience;
