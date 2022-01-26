import React from 'react';
import "./App.css";

import work from "./data/work.json";
import school from "./data/education.json";
import skills from "./data/skills.json";
// import resumePhoto from "./res/mxc-resume.jpg";

function Rez() {
  return (
    <div className="Rez container">
      <div className="row">
        <div className="MainLeftCol col-md-8 order-2 order-md-1">
          <div className="d-none d-md-block">
            <Header />
          </div>
          <Resume work={work} school={school} />
        </div>

        <div className="MainSideCol col-md-4 order-1 order-md-2">
          <div className="d-sm-block d-md-none mt-2 semiTrans p-3 rounded">
            <Header />
          </div>
          <img className="mx-auto d-block rounded-circle mb-3"
            src=""
            alt="matt wearing an adelphi t-shirt" />
          <Contact />
          <Skills skills={skills} />
        </div>

      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <section className="text-center mb-2 semiTrans p-3 rounded">
      <div>
        <a href="https://matt.curinga.com"
          title="go to matt's site">https://matt.curinga.com</a>
      </div>
      <div><a href="mailto:mcuringa@adelphi.edu">mcuringa@adelphi.edu</a></div>
    </section>
  )
}

function Header(props) {
  return (
    <header className="PortfolioHeader text-center">
      <h5>Matthew X. Curinga</h5>
      <Bio />
    </header>
  );
}

function Resume(props) {
  return (
    <main className="Resume">
      <Experience work={props.work} />
      <Education school={props.school} />
    </main>
  );
}


function Bio(props) {
  return (
    <section className="Bio">
      <p className="text-justify mb-3">
        I'm an experienced software developer and dedicated researcher of
        digital media. I'm especially intersted in the politics of software
        and software culture. I'm currently working on projects related to
        informal, peer, and self-learning; computer science education; and
        augmented reality.
      </p>
    </section>
  );
}

function Experience(props) {

  function Job(j, i) {

    let end = j.end;

    if (end === -1) {
      end = <em>present</em>;
    }

    return (
      <div key={i}>
        <h6 className="d-flex justify-content-between mb-0">
          {j.title} <div className="text-muted">{j.start} - {end}</div>
        </h6>
        <div className="text-muted"><a href={j.link}>{j.org}, {j.where}</a></div>
        <div className="row mb-2">
          <div className="col-12 col-md-10">{j.desc}</div>
        </div>
      </div>
    )
  }

  let jobs = props.work;
  jobs = jobs.map(Job);

  return (
    <section className="mt-3">
      <h5>Experience</h5>
      {jobs}
    </section>
  );

}

function Education(props) {


  function School(s, i) {

    return (
      <div key={i}>
        <h6 className="d-flex justify-content-between mb-0">
          {s.school} <div className="text-muted">{s.year}</div>
        </h6>
        <div className="text-muted">{s.location}</div>
        <div className="row mb-2">
          <div className="col-12 col-md-10">{s.degree}</div>
        </div>
      </div>
    )
  }

  let schools = props.school.map(School);

  return (
    <section className="mt-3">
      <h5>Education</h5>
      {schools}
    </section>
  );
}

function Skills(props) {
  function Skill(s, i) {
    const maxSkill = 5;
    let pct = s.score / maxSkill * 100 + "%";
    return (
      <div key={i} className="Skill d-flex justify-content-between">
        <div className="font-weight-bold text-primary">{s.skill}</div>
        <div className="progress w-50">
          <div className="progress-bar"
            style={{ width: pct }}
            role="progressbar"
            aria-valuenow={s.score}
            aria-valuemin="0"
            aria-valuemax={maxSkill}></div>
        </div>
      </div>

    )
  }

  let skills = props.skills.map(Skill);

  return (
    <section className="Skills semiTrans p-3 rounded mb-2">
      {skills}
    </section>
  );
}

export default Rez;
