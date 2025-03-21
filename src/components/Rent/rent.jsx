import "./rent.css"
import { useAddress } from "../../hooks/useAddresses"
import { useState } from "react"

export default function Rent() {
	const [inputValue, setInputValue] = useState('')
	const [filteredOptions, setFilteredOptions] = useState([])
	const [showSuggestions, setShowSuggestions] = useState(false)

	const { addresses } = useAddress() // Recupera las direcciones de la API

	const handleChange = (e) => {
		//Asigna el valor del input al estado de inputValue
		const value = e.target.value
		setInputValue(value)

		//Filtra las direcciones recuperadas de la API mostrando solo las que coinciden con el input
		const filtered = addresses.filter((option) =>(
				option.address.toLowerCase().includes(value.toLowerCase()) ||
				option.neighborhood.toLowerCase().includes(value.toLowerCase()) ||
				option.zipCode.toLowerCase().includes(value.toLowerCase())
			)
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
	const handleSelect = (option) => {
		setInputValue(option.address + ' ' + option.neighborhood + ' ' + option.zipCode)
		setShowSuggestions(false)
	}

	//Valida si se presionó Enter o Tab y si coincide con alguna dirección de las sugerencias
	const handleEnter = (e) => {
		if (e.key === "Enter" || e.key === "Tab") {
			if (e.key === "Enter" || e.key === "Tab") {
                const isValid = options.some(option => option.address === inputValue);
                if (!isValid) {
                  setInputValue("");
                }
                setShowSuggestions(false);
		    }
        }
	}

	return (
		<div className="rent" id="rent-id">
			<div className="titulo">
				<h2>Rent with us!</h2>
			</div>
			<div className="form">
				<div className="form-top">
					<img src="/src/assets/car-side-svgrepo-com.svg" alt="" />
					<label className="label-search" htmlFor="search-box">
						Pick-up Location
					</label>
				</div>
				<div className="input-search">
					<input
						type="text"
						value={inputValue}
						onChange={handleChange}
						onKeyDown={handleEnter}
						placeholder="Miami International Airport (MIA)..."
                        className="input-addresses"
					/>
					{/* Muestra las direcciones que coinciden con el input */}
					{showSuggestions && (
					<div className="addresses-suggestions">
						{filteredOptions.map((option, index) => (
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
							src="/src/assets/date-range-svgrepo-com.svg"
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
							src="/src/assets/date-range-end-svgrepo-com.svg"
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
		</div>
	)
}