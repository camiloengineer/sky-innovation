import React from 'react';
import Website from './../public/images/website.svg';

export const HaveToday = () => {
	return (
		<section id="have-to-day">
			<h3 className="text-center">¿Qué necesitas tener hoy?</h3>
			<div className="flex flex-wrap justify-center">
				<div>
					<Website alt="website" className="w-72" />
				</div>
				<div>
					<h5>Sitios Web</h5>
					<h4>Desarrollo de Sitios Web</h4>
					<p>
						Puedo realizar un sitio web alojado en la nube totalmente a la
						medida de tus necesidades de tu negocio. Utilizo las mejores
						prácticas para que tu sitio esté bien posicionado en las búsquedas
						de Google.
					</p>
				</div>
			</div>
		</section>
	);
};
