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
			<div className="row">
				<Card imagen="https://portalcanino.com/wp-content/uploads/2020/03/perro-raza-dachshund-700x700.jpg" />
				<Card imagen="https://t1.ea.ltmcdn.com/es/razas/5/5/0/img_55_golden-retriever-o-cobrador-dorado_0_orig.jpg" />
				<Card imagen="https://t1.ea.ltmcdn.com/es/razas/5/5/0/img_55_golden-retriever-o-cobrador-dorado_0_orig.jpg" />
			</div>
		</div>
	);
}
