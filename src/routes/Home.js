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
<br></br>
<br></br>

<p id="introduction2">about me</p>
<body id="bodyinfo">

</body>

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
