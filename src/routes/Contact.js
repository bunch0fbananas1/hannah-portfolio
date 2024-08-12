import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
           <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWl1d2MwbnNjMzNtd3Q4cGZpemx0ZTF4NWdocGh2aDlwdTBwM2RhZiZlcD12MV9naWZzX3NlYXJjaCZjdD1z/rtRflhLVzbNWU/giphy.gif" alt="Duck" class="center" align="right"/>

      <h1>Thanks for stopping by!</h1>
        <h2>Contact me using the form below with any inquires, input, or anything else.</h2>
      <body class="box">
      <form action="mailto:hghollings@gmail.com" method="post" enctype="text/plain" >
        <p>
          <label> First Name: <input type="text" /></label>
        </p>

        <p>
          <label> Last Name: <input type="text" /></label>
        </p>

        <p>
          <label> Email:     <input type="text" /></label>
        </p>

        <p>
          <label> Message: <input type="text" /></label>
        </p>

        <input type="submit" value= "Send"></input>
      </form>

      </body>
    </div>
  )
}

export default Contact
