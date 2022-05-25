import React, { useContext, useEffect } from "react";
import { userContext } from "./context/userContext";

function VehicleInfo() {
  const { currActive, reportInfo, setReportInfo, didUpdated } =
    useContext(userContext);
  useEffect(() => {
    // console.log(didUpdated, ".....VehicleInfo.....");
  }, [didUpdated]);

  const renderYears = () => {
    let i = 1990;
    let arr = [];
    while (i < 2022) {
      arr.push(
        <option value={`${i}`} key={i}>
          {" "}
          {i}{" "}
        </option>
      );
      i++;
    }
    return arr;
  };
  return (
    <div className="vehicle-info-container">
      <div className="vehicle-info-cotainer-a">
        <div>
          <label> License: </label>{" "}
          <input
            value={reportInfo.license}
            style={{
              borderBottom: currActive === "license" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                license: ele.target.value,
              })
            }
            type="text"
            id="License"
            name="License"
          />
        </div>{" "}
        <div>
          <label id="vin-label"> Last 4 number of VIN: </label>{" "}
          <input
            value={reportInfo.vin}
            style={{
              borderBottom: currActive === "vin" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                last4NumberOfVIN: ele.target.value,
              })
            }
            type="text"
            id="VIN"
            name="VIN"
          />
        </div>{" "}
      </div>{" "}
      <div className="vehicle-info-cotainer-b">
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label">Make:</label>{" "}
          <select
            value={reportInfo.make}
            style={{
              borderBottom: currActive === "make" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                make: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="make"
            name="make"
          >
            <option disabled> </option>
            <option value="Ford"> Ford </option>{" "}
            <option value="Dodge"> Dodge </option>{" "}
            <option value="Honda"> Honda </option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <div className="vehicle-info-cotainer-b--div">
        <label className="vehicle-info-cotainer-b--label">Model:</label>{" "}
        <select
          value={reportInfo.model}
          style={{
            borderBottom: currActive === "model" ? "3px solid #55c57a" : "",
          }}
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              model: ele.target.value,
            })
          }
          className="vehicle-info-cotainer-b--select"
          id="model"
          name="model"
        >
          <option disabled> </option>{" "}
          <option value="Explorer"> Explorer </option>{" "}
          <option value="Edge"> Edge </option>{" "}
          <option value="Escape "> Escape </option>{" "}
          <option value="Ram"> Ram </option>{" "}
          <option value="Caliber"> Caliber </option>{" "}
          <option value="Journey"> Journey </option>{" "}
          <option value="Passport"> Passport </option>{" "}
          <option value="Pilot"> Pilot </option>{" "}
          <option value="Ridgeline"> Ridgeline </option>{" "}
        </select>{" "}
      </div>{" "}
      <div className="vehicle-info-cotainer-b">
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label">Color:</label>{" "}
          <select
            value={reportInfo.color}
            style={{
              borderBottom: currActive === "color" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                color: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="color"
            name="color"
          >
            <option disabled> </option> <option value="Red"> Red </option>{" "}
            <option value="Black"> Black </option>{" "}
            <option value="White"> White </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label">Year:</label>{" "}
          <select
            value={reportInfo.year}
            style={{
              borderBottom: currActive === "year" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                year: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="year"
            name="year"
          >
            <option disabled> </option> {renderYears()}
          </select>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default VehicleInfo;
