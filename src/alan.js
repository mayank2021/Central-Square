import React, { useRef, useEffect } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

function Alan({ updateForm }) {
	const observed = useRef(null);

	useEffect(() => {
		if (!window.alanBtnInstance) {
			window.alanBtnInstance = alanBtn({
				key: "2f2ee9d2153311761cc1de04ce3430872e956eca572e1d8b807a3e2338fdd0dc/stage",
				position: "absolute",
				right: "0px",
				bottom: "0px",
				rootEl: observed.current,
				onButtonState: async function (status) {
					if (status === "ONLINE") {
						// if (!this.greetingWasSaid) {
						// 	await window.alanBtnInstance.activate();
						// 	window.alanBtnInstance.playText(
						// 		"Hello! I'm Alan. What type of violation citations are you looking to document, you can tell me the name or the code"
						// 	);
						// 	this.greetingWasSaid = true;
						// }
					}
				},
				onCommand: (commandData) => {
					console.log("<<<<<++++++", commandData, "+++++++>>>>>>>");
					if (commandData.command === "log-citation-request") {
						updateForm(commandData, "pre");
					}
				},
			});
		}
	}, [observed]);

	return (
		<div className="alan-btn-Container">
			<div ref={observed}></div>
		</div>
	);
}

export default Alan;
