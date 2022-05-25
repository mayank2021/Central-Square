import React, { useEffect, useContext } from "react";
import Alan from "./alan";
import { userContext } from "./context/userContext";
import VehicleInfo from "./vehicleInfo";
import ViolationFee from "./violationFee";

// import Select from "@mui/material/Select";
import Select from "react-select";
import MenuItem from "@mui/material/MenuItem";
import { color } from "@mui/system";

function Form() {
  const { currActive, reportInfo, setReportInfo, didUpdated, activatedselect } =
    useContext(userContext);

  useEffect(() => {
    console.log(currActive, ".....ReportPreDefinedInfo.....>", activatedselect);
  }, [activatedselect]);
  useEffect(() => {
    console.log(didUpdated, ".....ReportPreDefinedInfo.....>", activatedselect);
  }, [didUpdated]);

  const customStyles = {
    detail: {
      option: (provided, state) => ({
        ...provided,
        borderBottom: "none",
        color: state.isSelected ? "red" : "black",
        fontWeight: 400,
        padding: 0,
        paddingLeft: 10,
        fontSize: 13,
      }),
      menu: (provided, state) => ({
        ...provided,
        width: "80%",
        position: "relative",
        left: "17%",
        color: "red",
      }),
      control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 300,
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
      },
    },
  };
  return (
    <div className="form-container">
      <button
        onClick={(e) => {
          console.log("clicked", activatedselect.current);
          activatedselect.current.focus();
        }}
      >
        a
      </button>
      <div className="form-container-header">
        <div className="form-container-header-img" />
      </div>{" "}
      <div className="report-pre-info-container">
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "officer",
          }}
        >
          <label> Officer: </label>{" "}
          <input
            type="text"
            name="officer"
            id="officer"
            value={reportInfo.officer}
            style={{
              borderBottom: currActive === "officer" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                officer: ele.target.value,
              })
            }
          />{" "}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "date",
          }}
        >
          <label> Date: </label>{" "}
          <input
            type="text"
            name="date"
            id="date"
            value={reportInfo.date}
            style={{
              borderBottom: currActive === "date" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                date: ele.target.value,
              })
            }
          />{" "}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "time",
          }}
        >
          <label> Time: </label>{" "}
          <input
            type="text"
            name="time"
            id="time"
            style={{
              borderBottom: currActive === "time" ? "3px solid #55c57a" : "",
            }}
            value={reportInfo.time}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                time: ele.target.value,
              })
            }
          />{" "}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "location",
          }}
        >
          <label> Location: </label>{" "}
          <input
            type="text"
            name="location"
            id="location"
            value={reportInfo.location}
            style={{
              borderBottom:
                currActive === "location" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                location: ele.target.value,
              })
            }
          />{" "}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "detail",
          }}
        >
          <label> Violation Detail: </label>{" "}
          <Select
            styles={customStyles.detail}
            openMenuOnFocus={true}
            ref={activatedselect}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            value="chocolate"
            onChange={(e) => console.log("hey")}
            isSearchable={false}
          />
          {/* <Select
						ref={activatedselect}
						// style={{
						// 	borderBottom: currActive === "detail" ? "3px solid #55c57a" : "",
						// }}
						// onChange={(ele) =>
						// 	setReportInfo({
						// 		...reportInfo,
						// 		type: ele.target.value,
						// 	})
						// }
						value={reportInfo.detail}
						// className="report-pre-info-container--select"
						id="detail"
						name="detail"
						options={[
							{ value: 1, label: 1 },
							{ value: 2, label: 2 },
						]}
					> */}
          {/* <MenuItem disabled onClick={(ele) => console.log(ele, "&&&&&&&&")}>
							{" "}
						</MenuItem>{" "} */}
          {/* <Option value="vehicle in intersection">
							Vehicle in intersection{" "}
						</Option>{" "} */}
          {/* <MenuItem value="vehicle blocking driveway">
							Vehicle blocking driveway{" "}
						</MenuItem>{" "}
						<MenuItem value="vehicle blocking fire hydrant">
							Vehicle blocking fire hydrant{" "}
						</MenuItem>{" "}
						<MenuItem value="missing tabs"> Missing tabs </MenuItem>{" "}
						<MenuItem value="speeding in a residential area">
							Speeding in a residential area{" "}
						</MenuItem>{" "}
						<MenuItem value="speeding too fast for conditions">
							Speeding too fast for conditions{" "}
						</MenuItem>{" "}
						<MenuItem value="speeding in a school crossing">
							Speeding in a school crossing{" "}
						</MenuItem>{" "} */}
          {/* </Select>{" "} */}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "type",
          }}
        >
          <label> Violation type: </label>{" "}
          <select
            style={{
              borderBottom: currActive === "type" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                type: ele.target.value,
              })
            }
            value={reportInfo.type}
            className="report-pre-info-container--select"
            id="type"
            name="type"
          >
            <option disabled> </option>{" "}
            <option value="Parking Violation"> Parking Violation </option>{" "}
            <option value="Speeding Violation"> Speeding Violation </option>{" "}
          </select>{" "}
        </div>{" "}
        <div
          className="report-pre-info-container-grid-item"
          style={{
            gridArea: "code",
          }}
        >
          <label> Violation Code: </label>{" "}
          <select
            style={{
              borderBottom: currActive === "code" ? "3px solid #55c57a" : "",
            }}
            onChange={(ele) =>
              setReportInfo({
                ...reportInfo,
                code: ele.target.value,
              })
            }
            value={reportInfo.code}
            className="report-pre-info-container--select"
            id="code"
            name="code"
          >
            <option disabled> </option>{" "}
            <option value="22500(a)"> 22500(a) </option>{" "}
            <option value="22500(e)"> 22500(e) </option>{" "}
            <option value="22514"> 22514 </option>{" "}
            <option value="5204(a)"> 5204(a) </option>{" "}
            <option value="SP2"> SP2 </option>{" "}
            <option value="SP4"> SP4 </option>
            <option value="SP6"> SP6 </option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <div className="report-info-container">
        <VehicleInfo />
        <ViolationFee />
      </div>{" "}
      <Alan />
    </div>
  );
}

export default Form;
