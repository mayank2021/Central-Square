import React, { useContext } from "react";
import { userContext } from "./context/userContext";

const Review = () => {
  const { formData, setSubmitForm } = useContext(userContext);
  return (
    <div className="main-container-one">
      <h1 className="review-citation-heading">
        Citation
        <button
          style={{ margin: 0 }}
          onClick={() => setSubmitForm("form")}
          className="submit-button"
        >
          Go Back
        </button>
      </h1>
      {formData.map((ele, ind) => {
        return (
          <div style={{ width: "100%" }} key={ind}>
            <div className="review-main--container">
              <div className="review-container-top">
                <div className="review-container--top-left">
                  <h1
                    className="review-container-h1"
                    style={{ color: "black" }}
                  >
                    Report Info
                  </h1>
                  <div>
                    <p>Officer:{ele.reportInfo.officer}</p>
                    <p>Date:{ele.reportInfo.date}</p>
                    <p>Time:{ele.reportInfo.time}</p>
                    <p>Location:{ele.reportInfo.location}</p>
                    <p>Violation Type:{ele.reportInfo.type}</p>
                    <p>Violation Code:{ele.reportInfo.code}</p>
                    <p>Violation Detail:{ele.reportInfo.detail}</p>
                  </div>
                </div>
                <div className="review-container--top-right">
                  <h1
                    className="review-container-h1"
                    style={{ color: "black" }}
                  >
                    Vehicle Info
                  </h1>
                  <div>
                    <p>License:{ele.vehicleInfo.license}</p>
                    <p>
                      Last 4 number of VIN:{ele.vehicleInfo.last4NumberOfVIN}
                    </p>
                    <p>Make:{ele.vehicleInfo.make}</p>
                    <p>Model:{ele.vehicleInfo.model}</p>
                    <p>Color:{ele.vehicleInfo.color}</p>
                    <p>Year:{ele.vehicleInfo.year}</p>
                  </div>
                </div>
              </div>
              <div className="review-container-bottom">
                <i>
                  <h1 style={{ color: "black" }}>
                    Violation Fee:{ele.violationFee}
                  </h1>
                </i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
