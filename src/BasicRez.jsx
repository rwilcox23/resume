/**
 * This basic  version of the resume incldues all of the components
 * in a single javascript file. It imports the data
 * for the jobs from the .json file and uses the `Job`
 * function (insdie of `Experience`) to loop through them.
 * The content for the education and skills section are
 * "hardcoded" as JSX/HTML inside of their functions.
*/

import React from 'react';
import work from "./data/work.json";



function App() {
  return (
    <div className="App container">
      <Header />
      <Education />
      <Experience work={work} />
      <Skills />
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <h1>Robert J. Wilcox</h1>
      <h6>
        <a href="https://robertwilcox.com"
           title="go to Robert's site">https://robertwilcox.com</a>
      </h6>
      <h6><a href="mailto:robertwilcox@mail.adelphi.edu">robertwilcox@mail.adelphi.edu</a></h6>
      <hr />
    </header>
  );
}

function Experience(props) {

  function Job(j, i) {

    let end = j.end;

    if(end === -1) {
      end = <em>present</em>;
    }

    return (
      <ul>
        <li>
        <div key={i}>
          <h6>{j.title} {j.start}-{end}</h6>
          <a href={j.link}>{j.org}, {j.where}</a>
          <p class="text-muted">{j.desc}</p>
        </div>
        </li>
      </ul>

    )
  }

  let jobs = props.work;
  jobs = jobs.map(Job);

  return (
    <section>
      <h5>Experience</h5>
      {jobs}
    </section>
  );

}

function Education(props) {
  return (
    <section>
      <h5>Education</h5>
      <ul>
        <li><b>MA:</b> Educational Technology. Adelphi University.</li>
        <li><b>BA:</b> Mathematics. St. Josephs College.</li>
      </ul>
    </section>
  )
}

function Skills(props) {
  return (
    <section>
      <h5>Skills</h5>
      <ul>
        <li>Python</li>
        <li>Google Suite</li>
        <li>Microsoft Suite</li>
        <li>English</li>
        <li>Texas Instruments Calculator Software</li>
      </ul>
    </section>
  )
}

export default App;
