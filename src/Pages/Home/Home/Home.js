import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import ExceptionalDentalCare from "../ExceptionalDentalCare/ExceptionalDentalCare";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Navigation />
			<Banner />
			<Services />
			<ExceptionalDentalCare />
			<AppointmentBanner />
			<Testimonial />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
