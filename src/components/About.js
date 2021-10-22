import React from 'react';

function About() {
  return (
    <section class="about">
      <h2>About Me</h2>
      <div class="container">
  <div class="row">
    <div class="col">
    This is a paragraph about me. This paragraph tells the reader things things things about me. This is a paragraph about me. This paragraph tells the reader things about me. This is a paragraph about me. This paragraph tells the reader things about me.
    </div>
    <div class="col">
    <img src={require(`./assets/head.png`)}/>
    </div>
    </div>
    </div>
    </section>
  );
}

export default About;