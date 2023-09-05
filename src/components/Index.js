import React from "react";
import "./Index.css";
import indexlog from "../assests/logo.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ScrollRevealContainer from "./ScrollRevealContainer";

function Index() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="left">
          <ScrollRevealContainer>
            <div className="sr-left">
              <h1 className="left-head">
                Unleash Your <br />
                Inner Chef
              </h1>
              <div className="left-sub">
                <p>
                  {" "}
                  "Explore a world of culinary delights and transform ordinary
                  ingredients into{" "}
                </p>
                <p>
                  extraordinary dishes with our curated recipes, tips, and
                  inspiration."
                </p>
              </div>
            </div>
          </ScrollRevealContainer>
          <Link to="/Home">
            <ScrollRevealContainer>
              <div className="sr-bottom">
                <button>Let's Go</button>
              </div>
            </ScrollRevealContainer>
          </Link>
        </div>

        <div className="right">
          <ScrollRevealContainer>
            <div className="sr-right">
              <img src={indexlog} alt="logo-imge" className="right-image" />
            </div>
          </ScrollRevealContainer>
        </div>
      </div>
    </>
  );
}

export default Index;
