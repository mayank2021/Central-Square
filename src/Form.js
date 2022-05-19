import React, { useEffect, useState } from "react";
import Alan from "./alan";
import ReportPreDefinedInfo from "./reportPreDefinedInfo";
import ReportInfo from "./reportInfo";

function Form() {
  const [didUpdated, setDidUpdated] = useState(false);
  const [formPreData, setFormPreData] = useState({
    // officer: { title: "Officer", value: "" },
    // date: { title: "Date", value: "" },
    // time: { title: "Time", value: "" },
    location: { title: "Location", value: "" },
    type: { title: "Violation Type", value: "" },
    code: { title: "Violation Code", value: "" },
    detail: { title: "Violation Detail", value: "" },
    // agency: { title: "Agency", value: "" },
  });
  const [formInfoData, setFormInfoData] = useState({
    // officer: { title: "Officer", value: "" },
    // date: { title: "Date", value: "" },
    // time: { title: "Time", value: "" },
    location: { title: "Location", value: "" },
    type: { title: "Violation Type", value: "" },
    code: { title: "Violation Code", value: "" },
    detail: { title: "Violation Detail", value: "" },
    // agency: { title: "Agency", value: "" },
  });
  useState(() => {}, [didUpdated]);
  const updateForm = (commandData, part) => {
    let currData = part === "pre" ? formPreData : formInfoData;
    Object.keys(commandData).map((value) => {
      if (currData[value]) currData[value].value = commandData[value];
    });
    setFormPreData(currData);
    setFormPreData(currData);
    setDidUpdated((prev) => !prev);
  };
  return (
    <div className="form-container">
      <div className="form-container-header">
        <div className="form-container-header-img" />
      </div>
      <ReportPreDefinedInfo formData={formPreData} didUpdated={didUpdated} />
      <ReportInfo formData={formInfoData} />
      <Alan
        formPreData={formPreData}
        formInfoData={formInfoData}
        updateForm={updateForm}
      />
    </div>
  );
}

export default Form;
