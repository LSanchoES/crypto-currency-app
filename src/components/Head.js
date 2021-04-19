import React from "react";
import { Card, Media } from "react-bootstrap";
// import videoLand from "../assets/landing-video.mp4";

export const Head = () => {
	return (
		<>
			<Media className="animate__animated animate__fadeIn">
				<video 
                loop
                autoPlay
                muted 
                className="video animate__animated animate__fadeIn">
					<source src= "../../public/assets/landing-video.mp4" type="video/mp4" />
					Your browser does not support the video tag. I suggest you upgrade your
					browser.
				</video>
			<Card className="titulo animate__animated animate__fadeIn">
				<h1>Crypto Currency App</h1>
				<h3>
                    Today's Cryptocurrency Prices
				</h3>
			</Card>
			</Media>
		</>
	);
};
