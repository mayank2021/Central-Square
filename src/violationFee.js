import React, { useContext, useEffect } from "react";
import { userContext } from "./context/userContext";

function ViolationFee() {
  const { reportInfo, handleSubmit, didUpdated, setReportInfo } =
    useContext(userContext);
  useEffect(() => {
    console.log(
      // window.reportInfo.fee,
      reportInfo.fee
    );
  }, [didUpdated]);

  return (
    <div className="violation--fee">
      <div className="vehicle-info-cotainer-b--div">
        <label
          style={{
            width: "22%",
            paddingRight: "0",
            fontSize: "1rem",
            color: "#F4490C",
          }}
          className="vehicle-info-cotainer-b--label"
        >
          Violation Fee:
        </label>
        <select
          style={{
            width: "73%",
          }}
          value={reportInfo.fee}
          className="vehicle-info-cotainer-b--select"
          id="violationFee"
          name="violationFee"
          onChange={(ele) => setReportInfo(ele.target.value)}
        >
          <option disabled> </option>
          <option value="43"> 22500(a) vehicle in intersection - $43 </option>
          <option value="43"> 22500(e) vehicle blocking driveway - $43 </option>
          <option value="225">
            22514 vehicle blocking fire hydrant - $225
          </option>
          <option value="53"> 5204(a) missing tabs - $53 </option>
          <option value="175">SP2 speeding in a residential area - $175</option>
          <option value="300">
            SP4 speeding too fast for conditions - $300
          </option>
          <option value="503">SP6 speeding in a school crossing - $503</option>
        </select>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default ViolationFee;
