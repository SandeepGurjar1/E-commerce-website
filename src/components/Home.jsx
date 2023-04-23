import React from "react";
import Products from "./Products";
import Footer  from "./Footer";
import "./home.css";
export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
        src="https://images.prismic.io/axerve/c89fade8-c1a1-44c4-852e-a198cf9c9389_Carrelli%20abbandonati%20-%20Blog.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1946&h=955"
          className="card-img"
          alt=""
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="">
            <h5 className="card-title display-3 fw-bolder f1">
              <p className="enim">  Now! Shop <br /> From Anywhere <br />Food Factory </p>
            </h5>
            
            <p className="card-text lead fs-2">
             
            </p>
          </div>
        </div>
      </div>
      <Products/>
      <Footer/>
    </div>
  );
}
