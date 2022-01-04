import React, { useState, useEffect } from 'react';
import WebsiteSvg from './../public/images/website.svg';
import MobileSvg from './../public/images/mobile.svg';
import DesignSvg from './../public/images/design.svg';

export const HaveToday = () => {
	const [load, setLoad] = useState(false);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		// window.onscroll = function () {
		// 	setScroll(window.scrollY);
		// 	if (scroll > 300) {
		// 		setLoad(load);
		// 	}
		// };
	}, []);

	return (
		<section id="have-to-day">
			<h3 className="text-center">¿Qué necesitas tener hoy?</h3>
			<div
				className={`flex justify-center flex-wrap items-center mt-12 ${
					!load &&
					scroll > 300 &&
					'animate__animated animate__slideInLeft animate__slower'
				}`}>
				<div className="w-40">
					<MobileSvg alt="website" />
				</div>
				<div className="lg:w-6/12 px-8 lg:pl-20 lg:pr-0">
					<h5 className="my-2">iOS y Android</h5>
					<h4>Desarrollo de Aplicaciones Móviles</h4>
					<p className="my-6">
						Aprovecha los recursos de los dispositivos móvil para darles a tus
						clientes la mejor experiencia de usuario. Podrás tener tus
						aplicaciones disponibles en las tiendas de App Store y Play Store
					</p>
				</div>
			</div>
			<div
				className={`flex justify-center flex-wrap items-center mt-12 flex-col-reverse lg:flex-row  ${
					!load &&
					scroll > 300 &&
					'animate__animated animate__slideInRight animate__slower'
				}`}>
				<div className="lg:w-6/12 px-8 lg:pr-20 lg:pl-0">
					<h5 className="my-2">Sitios Web</h5>
					<h4>Desarrollo de Sitios Web</h4>
					<p className="my-6">
						Puedo realizar un sitio web alojado en la nube totalmente a la
						medida de tus necesidades de tu negocio. Utilizo las mejores
						prácticas para que tu sitio esté bien posicionado en las búsquedas
						de Google.
					</p>
				</div>
				<div className="w-60 lg:w-2/12">
					<WebsiteSvg alt="mobile" />
				</div>
			</div>
			<div
				className={`flex justify-center flex-wrap items-center mt-12 ${
					!load &&
					scroll > 300 &&
					'animate__animated animate__slideInLeft animate__slower'
				}`}>
				<div className="w-60">
					<DesignSvg alt="design" />
				</div>
				<div className="lg:w-6/12 px-8 lg:pl-20 lg:pr-0">
					<h5 className="my-2">Diseño UX/UI</h5>
					<h4>Diseño Web a la medida</h4>
					<p className="my-6">
						Puedo diseñar experiencias de usuario y llamativas interfaces
						adaptables a cualquier dispositivo que fascinarán a tus clientes.
					</p>
				</div>
			</div>
		</section>
	);
};
