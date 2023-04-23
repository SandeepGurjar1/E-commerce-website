import React from "react";
import Footer  from "./Footer";

function About(){
    return(
     
        <div>
            <h1 className="hi">About Us</h1>
            <div className="accordion accordion-flush my-5" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <h4>Developer</h4>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">This website is created by Sandeep Gurjar for ordering different kinds of Eatables</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <h4> Idea</h4>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Idea or Motive behind creating this website is to create a user friendly interface, from which anyone can get pure and fresh Eatables where ever he/she wants, without steping even a single step outside!
     </div>
    </div>
  </div>

</div>


</div>
     
      
    );
   
}

export default About;