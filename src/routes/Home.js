import React from 'react';
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
  return <div>
     <Navbar/>
     <br></br>
     <br></br>

<div class="start">
  <p id="introduction">Hi, I'm Hannah.</p>
  
  <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/portfoliostar1.png?raw=true" id="portfoliostar" width="100"></img>
  <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/portfoliostar1.png?raw=true" id="portfoliostar" width="100"></img>

  <p id="about">A design oriented software engineer passionate about front-end & back-end development</p>
</div>
<br>
</br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<p id="introduction2">a bit about me</p>
<br></br>
<div class="bodyinfo">
  <div>
    <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/IMG_3522%20(1).JPG?raw=true" alt="me" id="me" width="100%" height="100%" ></img>
  </div>
  <div>
    <p id="aboutbody">I am a <bold>senior</bold> at Washington University in St. Louis studying computer science, with minors in physics and history.
My interests lie in the intersection of technology, people, and innovation. I love finding ways to creatively solve technological problems.
In my free time, I can be found running, reading a new book, or testing a new recipe.
<br></br>
<br></br>
<a href="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/Hannah%20Hollingsworth%20Resume%202024.pdf" target="_blank" id="resume">resume</a>
    </p>
  </div>

</div>

<br></br>
<br></br>

<p id="introduction2">projects</p>
<br></br>
<br></br>
<div class="container">
    <div id="projects">

      <p id="projecttitle">Multi-armed bandit</p>
      <br></br>

      <p id="projectdesc">Uses python to simulate multi-armed bandit problem</p>
    </div>

    <div id="projects">
      <p id="projecttitle">Pacman simulation</p>
      <br></br>
      <p id="projectdesc">Employs machine learning algorithm to control a classic pacman game</p></div>

    <div id="projects">
    <p id="projecttitle">Neuroevolution experiment</p>
    <br></br>

    <p id="projectdesc">Uses python to simulate multi-armed bandit problem</p>
    </div>

    <div id="projects">
    <p id="projecttitle">Personal portfolio</p>
    <br></br>

    <p id="projectdesc">Portfolio created using React framework with Javascript, HTML, and CSS elements. I created all graphic using the Adobe suite, and deployed the site through Github pages.</p>
    </div>

    <div id="projects">5</div>
    <div id="projects">6</div>
    
</div>

<br></br>
<br></br>
<br></br>
<br></br>


<p id="introduction2">contact</p>
<div class="contactme">
  <div id="contactinfo">
      <form action="mailto:hghollings@gmail.com" method="post" enctype="text/plain" >
        <input type="submit" value= "Email"></input>
      </form>

  </div>
  <div id="contactinfo">
    <a href="https://www.linkedin.com/in/hannah-hollingsworth-a9703b201/">LinkedIn</a>
  </div >

  <div id="contactinfo">GitHub</div>
  
  <br></br>
  <br></br>

      </div>  </div>;
  
};

export default Home;

