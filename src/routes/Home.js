import React from 'react';
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
  return <div>
     <Navbar/>
<div class="start">
  <p id="introduction">Hi, I'm Hannah.</p>
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


<p id="introduction2">stuff about me</p>
<br></br>
<div class="bodyinfo">
  <div>
    <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/IMG_3522%20(1).JPG?raw=true" alt="me" id="me" width="100%" height="100%" ></img>
  </div>
  <div>
    <p id="aboutbody">I am a <bold>senior</bold> at Washington University in St. Louis studying computer science, with minors in physics and history.
My interests lie in the intersection of technology, people, and innovation. I love finding ways to creatively solve technological problems.
In my free time, I can be found running, reading a new book, or testing a new recipe.
    </p>
  </div>
</div>

<p id="introduction2"><bold>Projects</bold></p>
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    
</div>

<p id="introduction2">resume</p>
<a href="" target="_blank"></a>

<p id="introduction2">contact</p>
<div class="emailboxes">
  <div><body class="emailme">
      <form action="mailto:hghollings@gmail.com" method="post" enctype="text/plain" >
        <input type="submit" value= "Email me!"></input>
      </form>

      </body>
  </div>
  <div>linkedin</div>
  <div>github</div>
      </div>  </div>;
  
};

export default Home;
