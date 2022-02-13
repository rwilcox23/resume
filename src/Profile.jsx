import React from 'react';
import profileImg from "./res/robertwilcox.jpeg";

function Contact(props) {
  return (
    <section className="mb-2 semiTrans p-3 rounded">
      <div className="d-flex justify-content-center text-center">
        <a href="https://robertwilcox.com" className ="contactLink"
          title="go to Rob's site">https://robertwilcox.com</a>
      </div>
      <div className="d-flex justify-content-center text-center">
        <a href="mailto:robertwilcox@mail.adelphi.edu" className ="contactLink">robertwilcox@mail.adelphi.edu</a>
      </div>
    </section>
  )
}


function ProfileImg(props) {

  return (

    <img className=" rounded-circle img-fluid mt-2 d-md-block d-none" src={profileImg}
        alt="headshot of Rob" />

  )

}


function Bio(props) {
  return (
    <section className="Bio rounded-bottom">
      <p className="text-justify mb-4 px-2 pb-3">
        I have 13 years of experience working in a high school math classroom setting.
        I have challenged myself to learn and become well-versed in multiple curricula and have taught almost every high school math course offered by most schools.
        I am interested in and consider myself to be proficient in "all things tech".
        I'm currently working on a Masters Degree in Educational Technology, which ties together some old and new passions - mathematics and education with computer programming, coding, and more.
      </p>
    </section>
  );
}

export {Bio, Contact, ProfileImg};
