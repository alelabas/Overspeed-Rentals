import "./servicies.css"
import React from "react"
import { FaRoad, FaBuilding } from "react-icons/fa"
import { IoCarSport } from "react-icons/io5"
import { RiChatAiLine, RiRoadMapLine, Ri24HoursFill } from "react-icons/ri"
import { CgAirplane } from "react-icons/cg"
import { LiaCarAltSolid } from "react-icons/lia"
import { IconContext } from "react-icons/lib"

export default function Servicies() {
	return (
		<IconContext.Provider
			value={{
				size: "2.5rem",
				color: "#FF3C3C",
			}}
		>
			<section className="servicies">
				<h2>Our servicies</h2>
				<section className="services-container">
					<div className="services-group">
						<div className="service-container">
							<FaRoad />
							<h3>Road Assistance</h3>
						</div>
						<div className="service-container">
							<IoCarSport />
							<h3>Sports Cars</h3>
						</div>
						<div className="service-container">
							<Ri24HoursFill />
							<h3>24/7 Service</h3>
						</div>
						<div className="service-container">
							<RiChatAiLine />
							<h3>Chat Support</h3>
						</div>
					</div>

					<div className="services-group">
						<div className="service-container">
							<RiRoadMapLine />
							<h3>Delivery & Pick-Up</h3>
						</div>
						<div className="service-container">
							<CgAirplane />
							<h3>Airport Delivery</h3>
						</div>
						<div className="service-container">
							<LiaCarAltSolid />
							<h3>Renting Combos</h3>
						</div>
						<div className="service-container">
							<FaBuilding />
							<h3>Premium Location</h3>
						</div>
					</div>
				</section>
			</section>
		</IconContext.Provider>
	)
}
