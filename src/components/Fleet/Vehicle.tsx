import React from "react";
import { IoMdPeople } from "react-icons/io";
import { MdLuggage } from "react-icons/md";
import { IconContext } from "react-icons/lib"
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LuFuel } from "react-icons/lu";
import { Cars } from "../../types/types";

export default function Vehicle({ vehicle }: {vehicle: Cars}) {
	return (
		<div key={vehicle.id} className="fleet-card">
			<img src={vehicle.images[0]} alt={vehicle.model} />
			<h3>
				{vehicle.make} {vehicle.model}
			</h3>
			<div className="vehicle-specifications">
				<IconContext.Provider value={{ size: "20px", color: "black" }}>
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
		</div>
	)
}
