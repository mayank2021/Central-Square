import React, { useContext } from "react";
import { userContext } from "./context/userContext";

function VehicleInfo() {
  const { vehicleInfo, setVehicleInfo } = useContext(userContext);
  return (
    <div className="vehicle-info-container">
      <div className="vehicle-info-cotainer-a">
        <div>
          <label> License: </label>
          <input
            onChange={(ele) =>
              setVehicleInfo({ ...vehicleInfo, license: ele.target.value })
            }
            type="text"
            id="License"
            name="License"
          />
        </div>
        <div>
          <label id="vin-label">Last 4 number of VIN:</label>
          <input
            onChange={(ele) =>
              setVehicleInfo({
                ...vehicleInfo,
                last4NumberOfVIN: ele.target.value,
              })
            }
            type="text"
            id="VIN"
            name="VIN"
          />
        </div>
      </div>
      <div className="vehicle-info-cotainer-b">
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label" for="make">
            Make:
          </label>
          <select
            onChange={(ele) =>
              setVehicleInfo({
                ...vehicleInfo,
                make: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="make"
            name="make"
          >
            <option disabled selected value></option>
            <option value="Ford">Ford</option>
            <option value="Dodge">Dodge</option>
            <option value="Honda">Honda</option>
          </select>
        </div>
      </div>
      <div className="vehicle-info-cotainer-b--div">
        <label className="vehicle-info-cotainer-b--label" for="model">
          Model:
        </label>
        <select
          onChange={(ele) =>
            setVehicleInfo({
              ...vehicleInfo,
              model: ele.target.value,
            })
          }
          className="vehicle-info-cotainer-b--select"
          id="model"
          name="model"
        >
          <option disabled selected value></option>
          <option value="Explorer - Ford">Explorer - Ford</option>
          <option value="Edge - Ford">Edge - Ford</option>
          <option value="Escape - Ford">Escape - Ford</option>
          <option value="Ram - Dodge">Ram - Dodge</option>
          <option value="Caliber - Dodge">Caliber - Dodge</option>
          <option value="Journey - Dodge">Journey - Dodge</option>
          <option value="Passport - Honda">Passport - Honda</option>
          <option value="Pilot - Honda">Pilot - Honda</option>
          <option value="Ridgeline - Honda">Ridgeline - Honda</option>
        </select>
      </div>
      <div className="vehicle-info-cotainer-b">
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label" for="color">
            Color:
          </label>
          <select
            onChange={(ele) =>
              setVehicleInfo({
                ...vehicleInfo,
                color: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="color"
            name="color"
          >
            <option disabled selected value></option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
        </div>
        <div className="vehicle-info-cotainer-b--div">
          <label className="vehicle-info-cotainer-b--label" for="year">
            Year:
          </label>
          <select
            onChange={(ele) =>
              setVehicleInfo({
                ...vehicleInfo,
                year: ele.target.value,
              })
            }
            className="vehicle-info-cotainer-b--select"
            id="year"
            name="year"
          >
            <option disabled selected value></option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default VehicleInfo;
