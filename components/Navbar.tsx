import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Imagotipo from './../public/images/imagotipo.svg';
import Isotipo from './../public/images/isotipo.svg';

export default function Navbar() {
	const router = useRouter();
	const [collapse, setCollapse] = useState(true);
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.onscroll = function () {
			setScroll(window.scrollY);
		};
	}, []);

	return (
		<nav
			className={`duration-700 text-center uppercase flex items-center justify-between flex-wrap bg-white py-1 px-7 xl:px-64 max-w-none z-20 fixed w-full z-40 ${
				!scroll && collapse  && 'opacity-70'
			}`}>
			<div className="flex items-center flex-shrink-0 text-white">
				<Imagotipo
					className="w-40 h-20 hidden xl:block normal-case"
					alt="logo"
				/>
				<Isotipo className="w-16 block xl:hidden" alt="logo" />
			</div>
			<div className="block xl:hidden">
				<button
					onClick={() => setCollapse(!collapse)}
					className="flex items-center px-3 py-2 border rounded text-orange-default border-orange-default hover:text-orange-dark hover:border-orange-dark hover">
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			{/* Desktop */}
			<div className="hidden xl:block flex text-sm mx-auto items-center 2xl:pr-36">
				<Link href="/">
					<a
						className={`block mt-4 xl:inline-block xl:mt-0 hover:text-orange-dark mx-5 uppercase ${
							router.asPath === '/' ? 'text-orange-default' : 'text-black'
						}`}>
						Inicio
					</a>
				</Link>
				<Link href="/servicios">
					<a
						className={`block mt-4 xl:inline-block xl:mt-0 hover:text-orange-dark mx-5 uppercase ${
							router.asPath === '/servicios'
								? 'text-orange-default'
								: 'text-black'
						}`}>
						Servicios
					</a>
				</Link>
				<Link href="/sobre-mi">
					<a
						className={`block mt-4 xl:inline-block xl:mt-0 hover:text-orange-dark mx-5 uppercase ${
							router.asPath === '/sobre-mi'
								? 'text-orange-default'
								: 'text-black'
						}`}>
						Sobre Mí
					</a>
				</Link>
				<Link href="/portafolio">
					<a
						className={`block mt-4 xl:inline-block xl:mt-0 hover:text-orange-dark mx-5 uppercase ${
							router.asPath === '/portafolio'
								? 'text-orange-default'
								: 'text-black'
						}`}>
						Portafolio
					</a>
				</Link>
				<Link href="/contacto">
					<button className="btn-primary mx-5 uppercase">Contacto</button>
				</Link>
			</div>

			{/* Mobile */}
			<div
				className={
					collapse
						? 'hidden w-full flex-grow'
						: 'block xl:hidden w-full flex-grow'
				}>
				<div className="text-sm">
					<Link href="/">
						<a
							className={`block mt-4 hover:text-orange-dark uppercase ${
								router.asPath === '/' ? 'text-orange-default' : 'text-black'
							}`}>
							Inicio
						</a>
					</Link>
					<Link href="/servicios">
						<a
							className={`block mt-4 hover:text-orange-dark uppercase ${
								router.asPath === '/servicios'
									? 'text-orange-default'
									: 'text-black'
							}`}>
							Servicios
						</a>
					</Link>
					<Link href="/sobre-mi">
						<a
							className={`block mt-4 hover:text-orange-dark uppercase ${
								router.asPath === '/sobre-mi'
									? 'text-orange-default'
									: 'text-black'
							}`}>
							Sobre Mí
						</a>
					</Link>
					<Link href="/portafolio">
						<a
							className={`block mt-4 hover:text-orange-dark uppercase ${
								router.asPath === '/portafolio'
									? 'text-orange-default'
									: 'text-black'
							}`}>
							Portafolio
						</a>
					</Link>
				</div>
				<div className="py-5">
					<Link href="/contacto">
						<button className="btn-primary uppercase">Contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
