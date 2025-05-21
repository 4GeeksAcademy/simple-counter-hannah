import React from "react";
import SecondsCounter from "./SecondsCounter";
import NumberComponent from "./NumberComponent";


const Home = () => {
	return (

		<div className="container bg-dark m-2 p-2">
			<SecondsCounter />
			<NumberComponent />
		
		</div>
	);
};

export default Home;
