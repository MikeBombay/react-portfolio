import React from 'react';

function About() {
  return (
    <section class="about">
      <h2>About Me</h2>
      <div class="container">
      <ul className="flex-row mobile-row">
<li className="padding">
This is not going to be my real portfolio as I am not comfortable enough with React to use this as a pofrtfolio. This is a paragraph about me. This paragraph tells the reader things things things about me. This is a paragraph about me. This paragraph tells the reader things about me. This is a paragraph about me. This paragraph tells the reader things about me.
</li>
<li className="padding">
<img src={require(`./assets/head.png`).default}/>
</li>
</ul>
 
    </div>
    </section>
  );
}



export default About;