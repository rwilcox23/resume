import React from 'react';
import work from "./data/work.json";


function App() {
  return (
    <div className="App container">
      <Header />
      <Resume work={work} />
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

function Resume(props) {
  return (
    <main>
      <Experience work={props.work} />
      <Skills />
      <Education />
    </main>
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
        <h5>{j.title} <small>{j.start} - {end}</small></h5>
        <h6><a href={j.link}>{j.org}, {j.where}</a></h6>
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
  return null;
}

function Skills(props) {
  return null;
}

export default App;
