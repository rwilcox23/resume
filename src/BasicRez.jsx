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
      <h1>Matthew X. Curinga</h1>
      <h6>
        <a href="https://matt.curinga.com"
           title="go to matt's site">https://matt.curinga.com</a>
      </h6>
      <h6><a href="mailto:mcuringa@adelphi.edu">mcuringa@adelphi.edu</a></h6>
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
      <div key={i}>
        <h5>{j.title} {j.start}-{end}</h5>
        <a href={j.link}>{j.org}, {j.where}</a>
        <p>{j.desc}</p>
      </div>
    )
  }

  let jobs = props.work;
  jobs = jobs.map(Job);

  return (
    <section>
      <h2>Experience</h2>
      {jobs}
    </section>
  );

}

function Education(props) {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        <li><b>EdD:</b> Instructional Tecnology &amp; Media. Columbia University.</li>
        <li><b>MA:</b> Computing &amp; Education. Columbia University.</li>
        <li><b>BA:</b> English. Colby College.</li>
      </ul>
    </section>
  )
}

function Skills(props) {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        <li>Javascript</li>
        <li>Python</li>
        <li>Java</li>
        <li>English</li>
        <li>Spanish</li>
      </ul>
    </section>
  )
}

export default App;
