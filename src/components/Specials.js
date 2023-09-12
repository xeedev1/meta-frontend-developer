import React from "react";
import greekSaladImage from "../img/greek-salad.jpg";
import grilledFish from "../img/grilled-fish.jpg";
import brushetta from "../img/brushetta.jpg";

const Specials = () => {
  return (
    <>
      <section className="specials bg-white">
        <div className="container">
          <h1>Order for Delivery</h1>
          <div className="row selection-nav">
            <button className="btn btn-menu">Lunch</button>
            <button className="btn btn-menu">Mains</button>
            <button className="btn btn-menu">Desserts</button>
            <button className="btn btn-menu">A La Carte</button>
            <button className="btn btn-menu">Italian</button>
          </div>
          <hr />
          <div className="menu-item">
            <div className="row">
              <div className="col-9">
                <h3>Greek Salad</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam, soluta!
                </p>
                <p>
                  <strong>$12.99</strong>
                </p>
              </div>
              <div className="col-3 align-self-center">
                <img src={greekSaladImage} alt="greek salad" />
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="row">
              <div className="col-9">
                <h3>Brushetta</h3>
                <p>
                  onsectetur adipisicing elit. Maxime rem, accusamus magnam
                  dicta laborum dolorem!
                </p>
                <p>
                  <strong>$7.99</strong>
                </p>
              </div>
              <div className="col-3 align-self-center">
                <img src={brushetta} alt="greek salad" />
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="row">
              <div className="col-9">
                <h3>Grilled Fish</h3>
                <p>
                  alias numquam illo repudiandae officia corporis, cumque
                  aliquam. Minima quisquam deleniti mollitia quam.
                </p>
                <p>
                  <strong>$12.99</strong>
                </p>
              </div>
              <div className="col-3 align-self-center">
                <img src={grilledFish} alt="greek salad" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
