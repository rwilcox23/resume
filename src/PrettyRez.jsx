/**
 * This version of the resume pulls all of the data from .json files. Work, skills,
 * and education can be modified just by updating these files.
 *
 * All of the major sections are imported from their own JSX components.
 * Experience, Education, and Skills all get their own file. The smaller components
 * are bundled into Profile.jsx
 *
 * The styles rely heavily on Bootstrap for layout, including a "responsive"
 * design. This page has a 2-column layout for most screens, but shrinks to a
 * single column for small screens.
 */

import React from 'react';

import Experience from "./Work.jsx";
import Education from "./Schools.jsx";
import Skills from "./Skills.jsx";
import {Bio, Contact, ProfileImg} from "./Profile.jsx";

function Rez() {
  return (
    <div className="Rez container m-3 p-3">
      <div className="row">
        <div className="MainLeftCol col-12 col-md-8">
          <Header />
          <Experience />
          <Education />
        </div>

        <div className="MainSideCol col-md-4 flex-column">
          <ProfileImg />
          <Contact />
          <Skills />
        </div>

      </div>
    </div>
  );
}


// note that there is custom css for .PortfolioHeader h5 in index.css
function Header(props) {
  return (
    <header className="PortfolioHeader">
      <h5>Matthew X. Curinga</h5>
      <Bio />
    </header>
  );
}








export default Rez;
