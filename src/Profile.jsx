import React from 'react';
import profileImg from "./res/robertwilcox.jpeg";

function Contact(props) {
  return (
    <section className="text-center mb-2 semiTrans p-3 rounded">
      <div>
        <a href="https://matt.curinga.com"
          title="go to matt's site">https://matt.curinga.com</a>
      </div>
      <div><a href="mailto:robertwilcox@mail.adelphi.edu">robertwilcox@mail.adelphi.edu</a></div>
    </section>
  )
}


function ProfileImg(props) {

  return (
    <img className="mx-auto d-md-block d-sm-none mb-3 img-fluid" src={profileImg}
      alt="headshot of Rob" />
  )

}


function Bio(props) {
  return (
    <section className="Bio">
      <p className="text-justify mb-3">
        I have 13 years of experience working in a high school math classroom setting.
        I have challenged myself to learn and become well-versed in multiple curricula and have taught almost every high school math course offered by most schools.
        I am interested in and consider myself to be proficient in "all things tech".
        I'm currently working on a Masters Degree in Educational Technology, which ties together some old and new passions - mathematics and education with computer programming, coding, and more.
      </p>
    </section>
  );
}

export {Bio, Contact, ProfileImg};
