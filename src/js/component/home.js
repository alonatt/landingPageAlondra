import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "./barranavegacion";
import { Jumbotron } from "./gigante";
import { Card } from "./Tarjeta";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row justify-content-center mx-4">
				<Card
					imagen="https://portalcanino.com/wp-content/uploads/2020/03/perro-raza-dachshund-700x700.jpg"
					title="Alma"
					text="Soy la mas llorano y regalona del mundo"
				/>
				<Card
					imagen="https://t1.ea.ltmcdn.com/es/razas/5/5/0/img_55_golden-retriever-o-cobrador-dorado_0_orig.jpg"
					title="Lucy"
					text="Soy la mass hermosa y mejor portada"
				/>
				<Card
					imagen="https://i.pinimg.com/236x/ee/a9/a8/eea9a86fba64d7cc101212442472a777--miniature-schnauzer-puppies-schnauzer-puppy.jpg"
					title="Togo"
					text="Soy el mas desordenado de todos"
				/>
			</div>
		</div>
	);
}
