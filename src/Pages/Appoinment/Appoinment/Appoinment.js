import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";

import Navigation from "../../Shared/Navigation/Navigation";
import AppoinmentHeader from "../AppoinmentHeader/AppoinmentHeader";
import AvailabeAppoinment from "../AvailabeAppoinment/AvailabeAppoinment";

const Appoinment = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<div>
			<Navigation />
			<AppoinmentHeader date={date} setDate={setDate} />
			<AvailabeAppoinment date={date} />
			<Footer />
		</div>
	);
};

export default Appoinment;
