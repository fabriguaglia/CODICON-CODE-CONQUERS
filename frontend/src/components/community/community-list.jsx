import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ItemList from "./item-list";
import propTypes from "prop-types";
import './community-list.css';

const CommunityList = ({ backgroundColor }) => {
	const url = "http://localhost:3002/comunity";
	const [comunity, setComunity] = useState([]);
	const [params, setParams] = useState({
		name: '',
	});

	const handleChange = (e) => {
		setParams({
			...params,
			[e.target.name]: e.target.value
		})
	}

	useEffect(() => {
		try {
			axios.get(url, {
				params: {
					name: params.name
				}
			}).then((response) => {
				setComunity(response.data.docs);
				console.log(response.data.docs);
			}).catch((error) => {
				console.log(error);
			})
		} catch (error) {
			console.log(error);
		}
	}, [params]);

	return (
		//este div es el contenedor de la lista de comunidades, se le pasa el color de fondo que se le quiera dar y toma todo el ancho de la pantalla
		<div className={`max-w-full mx-auto px-4 py-8 ${backgroundColor} flex flex-col items-center`}>
			<div className={`flex flex-col justify-around`}>
				<h1 className="text-4xl text-black text-center font-bold my-16">Comunidades</h1>
				<div className="flex justify-center">
					<input
						type="text"
						name="name"
						value={params.name}
						onChange={handleChange}
						placeholder="Buscar comunidad..."
						className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
					/>
				</div>
				{/* Genera una grilla de 1 o 2 columnas dependiendo del tamaño de la pantalla */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
					{/* Se genera un ItemList por cada item que se le pase */}
					{Array.isArray(comunity) && comunity.map((item, index) => (
						<ItemList
							key={index}
							name={item.name}
							description={item.description}
							comunity_image={item.comunity_image}
							number={item.limit}
							state={item.state}
							reactions={item.reactions}
							isLocked={item.isLocked}
						/>
					))}
				</div>
			</div>
			<div className="mt-8 flex flex-col items-center">
				<button className="bg-secondary-color text-xl font-medium text-white py-2 px-16 rounded-full hover:bg-opacity-80 transition duration-300 uppercase">
					Ver más comunidades...
				</button>
				<h2 className="text-lg mb-4">¿No encuentras tu comunidad? <Link className="color-primary" to='/create-community'>Crea una nueva.</Link></h2>
			</div>
		</div>
	);
};

CommunityList.propTypes = {
	backgroundColor: propTypes.string
}

export default CommunityList;
