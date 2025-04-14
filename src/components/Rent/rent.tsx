import "./rent.css"
import { useAddress } from "../../hooks/useAddresses"
import { ReactHTMLElement, useState } from "react"
import React from "react"
import { Address } from "../../types/types"

export default function Rent() {
	const [inputValue, setInputValue] = useState<string>('')
	const [filteredOptions, setFilteredOptions] = useState<Address[]>()
	const [showSuggestions, setShowSuggestions] = useState(false)

	const addresses = useAddress() // Recupera las direcciones de la API

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		//Asigna el valor del input al estado de inputValue
		const value = e.target.value
		setInputValue(value)

		if (!addresses) {
			setFilteredOptions([])
			setShowSuggestions(false)
			return
		}

		//Filtra las direcciones recuperadas de la API mostrando solo las que coinciden con el input
		const filtered = addresses.filter( option => (
			option.address.toLowerCase().includes(value.toLowerCase()) ||
			option.neighborhood.toLowerCase().includes(value.toLowerCase()) ||
			option.zipCode.toLowerCase().includes(value.toLowerCase()
		))
		)
		
		//Si el input está vacío, no muestra ninguna dirección
		if (value === '') {
			setFilteredOptions([])
			setShowSuggestions(false)
			return
		}

		//Muestra solo las primeras 3 direcciones que coinciden con el input
		setFilteredOptions(filtered)
		//En caso de haber resultados, los muestra
		setShowSuggestions(filtered.length > 0)
	}

	//Asigna la dirección seleccionada al input
	const handleSelect = (option: Address) => {
		setInputValue(option.address + ' ' + option.neighborhood + ' ' + option.zipCode)
		setShowSuggestions(false)
	}

	return (
		<section className="rent" id="rent-id">
			<div className="titulo">
				<h1 className="page-title">OVERSPEED RENTALS</h1>
				<p className="page-mission">Our mission is to make your vacations <strong>unique</strong> and <strong>unforgettable</strong> where you won't have any worries or concerness.<br/>We will make everything happen so that you <strong>enjoy</strong> and <br/> <strong>Drive Miami Your Way</strong></p>
			</div>

			<h2>Rent with us!</h2>
			<div className="form">
				<div className="form-top">
					<img src="assets/car-side-svgrepo-com.svg" alt="" />
					<label className="label-search" htmlFor="search-box">
						Pick-up Location
					</label>
				</div>
				<div className="input-search">
					<input
						type="text"
						value={inputValue}
						onChange={handleChange}
						placeholder="Miami International Airport (MIA)..."
                        className="input-addresses"
					/>
					{/* Muestra las direcciones que coinciden con el input */}
					{showSuggestions && (
					<div className="addresses-suggestions">
						{filteredOptions && filteredOptions.map((option, index) => (
							<button
								key={index}
								onClick={() => handleSelect(option)}
								className="button-select"
							>
								{option.address} - {option.neighborhood} - {option.zipCode}
							</button>
						))}
					</div>
				)}
				</div>
				<div className="date-container">
					<span className="span-container">
						<img
							src="assets/date-range-svgrepo-com.svg"
							alt=""
						/>
						<label htmlFor="inputDateStart" className="label-date">
							Start
						</label>
						<input
							type="date"
							className="input-date"
							required
							name="inputDateStart"
						/>
					</span>
					<span className="span-container">
						<img
							src="assets/date-range-end-svgrepo-com.svg"
							alt=""
						/>
						<label htmlFor="inputDateEnd" className="label-date">
							End
						</label>
						<input
							type="date"
							className="input-date"
							required
							name="inputDateEnd"
						/>
					</span>
					<button className="input-button">Search</button>
				</div>
			</div>
		</section>
	)
}