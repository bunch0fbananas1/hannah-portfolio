import React from 'react';
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
  return <div>
     <Navbar/>
<div class="start">
  <p id="introduction">Hi, I'm Hannah.</p>
  
  <div class="wrapper">
    <div class="bounce">
          <span>h</span>
          <span>a</span>
          <span>n</span>
          <span>n</span>
          <span>a</span>
          <span>h</span>
    </div>
  </div>

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

<p id="introduction2">take a look at some of my projects</p>
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    
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

