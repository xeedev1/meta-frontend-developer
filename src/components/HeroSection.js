import React from "react";
import reserveTableImage from "../img/reserve-table.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <div className="row">
              <div className="col-8 align-self-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  maiores perferendis commodi totam suscipit rerum sit repellat
                  aperiam cumque dolores.
                </p>
              </div>
              <div className="col-4">
                <img src={reserveTableImage} alt="" />
              </div>
            </div>
            <Link to="/reserve-table">
              <button className="btn btn-little-lemon">Reserve a table</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
