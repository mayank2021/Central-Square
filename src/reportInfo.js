import React from "react";
import VehicleInfo from "./vehicleInfo";
import ViolationFee from "./violationFee";

function ReportInfo() {
	return (
		<div className="report-info-container">
			<VehicleInfo />
			<ViolationFee />
		</div>
	);
}

export default ReportInfo;
