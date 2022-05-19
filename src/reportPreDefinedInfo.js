import React, { useEffect, useContext } from "react";
import { userContext } from "./context/userContext";

function ReportPreDefinedInfo({ formData, didUpdated }) {
  const { reportInfo, setReportInfo } = useContext(userContext);

  useEffect(() => {
    console.log(formData, "..........");
  }, [didUpdated]);
  return (
    <div className="report-pre-info-container">
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "officer" }}
      >
        <label> Officer: </label>
        <input
          type="text"
          name="officer"
          id="officer"
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              officer: ele.target.value,
            })
          }
        />
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "date" }}
      >
        <label> Date: </label>
        <input
          type="text"
          name="date"
          id="date"
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              date: ele.target.value,
            })
          }
        />
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "time" }}
      >
        <label> Time: </label>
        <input
          type="text"
          name="time"
          id="time"
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              time: ele.target.value,
            })
          }
        />
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "location" }}
      >
        <label> Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              location: ele.target.value,
            })
          }
        />
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "detail" }}
      >
        <label> Violation Detail: </label>
        <input
          type="text"
          name="detail"
          id="detail"
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              detail: ele.target.value,
            })
          }
        />
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "type" }}
      >
        <label> Violation Type: </label>
        <select
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              type: ele.target.value,
            })
          }
          className="report-pre-info-container--select"
          id="type"
          name="type"
        >
          <option disabled selected value></option>
          <option value="Vehicle in intersection">
            Vehicle in intersection
          </option>
          <option value="Vehicle blocking driveway">
            Vehicle blocking driveway
          </option>
          <option value="Vehicle blocking fire hydrant">
            Vehicle blocking fire hydrant
          </option>
          <option value="Missing tabs">Missing tabs</option>
          <option value="Speeding in a residential area">
            Speeding in a residential area
          </option>
          <option value="Speeding too fast for conditions">
            Speeding too fast for conditions
          </option>
          <option value="Speeding in a school crossing">
            Speeding in a school crossing
          </option>
        </select>
      </div>
      <div
        className="report-pre-info-container-grid-item"
        style={{ gridArea: "code" }}
      >
        <label> Violation Code: </label>
        <select
          onChange={(ele) =>
            setReportInfo({
              ...reportInfo,
              code: ele.target.value,
            })
          }
          className="report-pre-info-container--select"
          id="code"
          name="code"
        >
          <option disabled selected value></option>
          <option value="22500(a)">22500(a)</option>
          <option value="22500(e)">22500(e) </option>
          <option value="22514">22514 </option>
          <option value="5204(a)">5204(a)</option>
          <option value="SP2">SP2</option>
          <option value="SP4">SP4</option>
          <option value="SP6">SP6</option>
        </select>
      </div>
    </div>
  );
}

export default ReportPreDefinedInfo;
