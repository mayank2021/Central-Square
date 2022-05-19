import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [submitForm, setSubmitForm] = useState("form");

  const [reportInfo, setReportInfo] = useState({
    officer: "",
    date: "",
    time: "",
    type: "",
    code: "",
    detail: "",
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    license: "",
    last4NumberOfVIN: "",
    make: "",
    model: "",
    color: "",
    year: "",
  });

  const [violationFee, setViolationFee] = useState("");

  const [formData, setFormData] = useState([]);

  const handleSubmit = () => {
    setSubmitForm("success");
    setFormData((prev) => [...prev, { reportInfo, vehicleInfo, violationFee }]);
  };

  return (
    <userContext.Provider
      value={{
        violationFee,
        setViolationFee,
        vehicleInfo,
        setVehicleInfo,
        reportInfo,
        setReportInfo,
        formData,
        submitForm,
        setSubmitForm,
        handleSubmit,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
