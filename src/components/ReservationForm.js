import React, { useState } from "react";
import ReserveTableImage1 from "../img/reserve-a-table-left.png";
import ReserveTableImage2 from "../img/reserve-a-table-right.png";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  });

  const [formErrors, setFormErrors] = useState({
    date: "",
    time: "",
    diners: "",
    occasion: "",
    seating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!formData.date) {
      errors.date = "Date is required.";
    }

    if (!formData.time) {
      errors.time = "Time is required.";
    }

    if (!formData.diners) {
      errors.diners = "Number of diners is required.";
    }

    if (!formData.occasion) {
      errors.occasion = "Occasion is required.";
    }

    if (!formData.seating) {
      errors.seating = "Seating option is required.";
    }

    // Update the formErrors state with validation results
    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      console.log(formData); // Log the form data when submitted
      // You can add your submission logic here
    }
  };

  return (
    <>
      <section className="reservation-section">
        <div className="container d-flex justify-content-center">
          <div className="row mt-3 w-lg-50 bg-light-custom mt-5">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <h3>Find a table for any occasion</h3>
            <div className="col-6">
              <img src={ReserveTableImage1} alt="" />
            </div>
            <div className="col-6">
              <img src={ReserveTableImage2} alt="" />
            </div>
            <div className="col-sm-12">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group date-and-time">
                  <input
                    className="form-control"
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {formErrors.date && (
                    <div className="text-danger">{formErrors.date}</div>
                  )}
                  <input
                    className="form-control"
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  {formErrors.time && (
                    <div className="text-danger">{formErrors.time}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="diners"
                    id="diners"
                    placeholder="Number of Diners"
                    value={formData.diners}
                    onChange={handleChange}
                  />
                  {formErrors.diners && (
                    <div className="text-danger">{formErrors.diners}</div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="occasion"
                    id="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Ocassion</option>
                    <option value="Party">Party</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Corporate Treat">Corporate Treat</option>
                    <option value="Bridal Shower">Bridal Shower</option>
                  </select>
                  {formErrors.occasion && (
                    <div className="text-danger">{formErrors.occasion}</div>
                  )}
                </div>
                <h3>Seating Options</h3>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="standard">
                    Standard
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seating"
                    id="standard"
                    value="Standard"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="outside">
                    Outside
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seating"
                    id="outside"
                    value="Outside"
                    onChange={handleChange}
                  />
                </div>
                {formErrors.seating && (
                  <div className="text-danger">{formErrors.seating}</div>
                )}
                <button className="btn btn-primary btn-submit" type="submit">
                  Let's Go
                </button>
                <p className="note">
                  <span>
                    <strong>Note:</strong> please check console for the data
                    response after submitting the form
                  </span>
                  <br />
                  <br />
                  <span className="text-danger">
                    Their API is returning error 404 that's why I can't fetch
                    data from there. please check for yourself:{" "}
                    <Link
                      className="text-warning"
                      to="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
                    >
                      Meta's Date and Time Data API
                    </Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
