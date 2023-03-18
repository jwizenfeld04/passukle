import React, { useState } from "react";
import { PassukGuesser } from "./parse";
// Allowed extensions for input file

const App = () => {
	return (
		<div style={{backgroundColor: "lightblue", height:'100vh'}}>
			<PassukGuesser/>
		</div>
	);
};

export default App;
