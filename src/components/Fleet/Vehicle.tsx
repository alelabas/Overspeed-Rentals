import React from "react";
import { IoMdPeople, IoMdClose } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";
import { Cars } from "../../types/types";
import { useRef } from "react";

export default function Vehicle({ vehicle }: {vehicle: Cars}) {

	const refDialog = useRef<HTMLDialogElement>(null)
 
	const handleClick = () => {
		refDialog.current?.showModal()
	}

	return (
		<div key={vehicle.id} className="fleet-card">
			<img src={vehicle.images[0]} alt={vehicle.model} />
			<h3>
				{vehicle.make} {vehicle.model}
			</h3>
			<div className="vehicle-specifications">
				<IconContext.Provider value={{ size: "20px", color: "#ff3c3c" }}>
					<span className="vehicle-specs">
						<IoMdPeople />
						<p>{vehicle.passengers}</p>
					</span>
					<span className="vehicle-specs">
						<MdLuggage />
						<p>{vehicle.luggageCapacity}</p>
					</span>
					<span className="vehicle-specs">
						<LiaSuitcaseSolid />
						<p>{vehicle.carryOnCapacity}</p>
					</span>
					<span className="vehicle-specs">
						<LuFuel />
						<p>{vehicle.mpg}</p>
					</span>
				</IconContext.Provider>
			</div>
			<p>
				From <span className="vehicle-price">${vehicle.price}/day</span>{" "}
				- <span className="discount-price">${vehicle.price + 40}</span>
			</p>
			<div className="button-view-more">
				<button onClick={handleClick}>See more</button>
			</div>

			<dialog ref={refDialog} className="dialog-modal" closedBy="any">
				<div className="dialog-content">
					<div className="close-menu">
						<form method="dialog"><button className="close-button"><IoMdClose size={'25px'}/></button></form>
					</div>
					
					<div className="main-content">
						<h3>{vehicle.make} {vehicle.model}</h3>
						<img src={vehicle.images[1]} alt={vehicle.model} />
					</div>
				</div>	
			</dialog>

		</div>
	)
}
