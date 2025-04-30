import "./servicies.css"
import React from "react"
import { FaRoad, FaBuilding } from "react-icons/fa"
import { IoCarSport } from "react-icons/io5"
import { RiChatAiLine, RiRoadMapLine, Ri24HoursFill } from "react-icons/ri"
import { CgAirplane } from "react-icons/cg"
import { LiaCarAltSolid } from "react-icons/lia"
import { IconContext } from "react-icons/lib"
import { FormattedMessage } from "react-intl"

export default function Servicies() {
	return (
		<IconContext.Provider
			value={{
				size: "2.5rem",
				color: "#FF3C3C",
			}}
		>
			<section className="servicies">
				<h2>
					<FormattedMessage id="app.servicies.title" defaultMessage="Servicies" />
				</h2>
				<section className="services-container">
					<div className="services-group">
						<div className="service-container">
							<FaRoad />
							<h3>
								<FormattedMessage id="app.servicies.road" defaultMessage="Road Assistance" />
							</h3>
						</div>
						<div className="service-container">
							<IoCarSport />
							<h3>
								<FormattedMessage id="app.servicies.cars" defaultMessage="Car Assistance" />
							</h3>
						</div>
						<div className="service-container">
							<Ri24HoursFill />
							<h3>
								<FormattedMessage id="app.servicies.service" defaultMessage="24/7 Assistance" />	
							</h3>
						</div>
						<div className="service-container">
							<RiChatAiLine />
							<h3>
								<FormattedMessage id="app.servicies.support" defaultMessage="Chat Support" />
							</h3>
						</div>
					</div>

					<div className="services-group">
						<div className="service-container">
							<RiRoadMapLine />
							<h3>
								<FormattedMessage id="app.servicies.delivery" defaultMessage="Delivery & Pick-Up" />
							</h3>
						</div>
						<div className="service-container">
							<CgAirplane />
							<h3>
								<FormattedMessage id="app.servicies.airport" defaultMessage="Airport service" />
							</h3>
						</div>
						<div className="service-container">
							<LiaCarAltSolid />
							<h3>
								<FormattedMessage id="app.servicies.combos" defaultMessage="Vehicle Combos" />	
							</h3>
						</div>
						<div className="service-container">
							<FaBuilding />
							<h3>
								<FormattedMessage id="app.servicies.location" defaultMessage="Premium Location" />
							</h3>
						</div>
					</div>
				</section>
			</section>
		</IconContext.Provider>
	)
}
