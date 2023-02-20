import { useState } from 'react'
import React from 'react'
import { Burger, LinkNav } from '../components'

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [navBar, setNavBar] = useState(false)

	const handleToggleMenu = () => {
		setMenuOpen(prev => !prev)
	}

	const changeBackground = () => {
		window.scrollY >= 100 ? setNavBar(true) : setNavBar(false)
	}

	window.addEventListener('scroll', changeBackground)
	return (
		<div className="fixed z-50">
			<nav className={`${navBar ? 'bg-third' : 'bg-transparent'} w-screen h-14 xl:h-[4rem] duration-300`}>
				{/* Telefony */}
				<div
					className={`${
						menuOpen ? 'translate-x-0' : 'translate-x-full'
					} w-screen h-screen flex items-center justify-center fixed bg-second duration-500 md:hidden z-10`}
					onClick={handleToggleMenu}>
					<LinkNav />
				</div>
				<a href="#Home">
					<h2 className="fixed top-3 left-5 text-2xl font-semibold  md:text-3xl lg:text-3xl xl:text-3xl xl:top-4 xl:left-10">
						Karlos
						<span className=" text-fourth">Dev</span>
					</h2>
				</a>
				<div className="z-20 md:hidden" onClick={handleToggleMenu}>
					<Burger menuOpen={menuOpen} />
				</div>
				{/* Tablet */}
				<div className="hidden  md:flex fixed right-5 md:top-4 xl:top-5">
					<LinkNav />
				</div>
			</nav>
		</div>
	)
}

export default Nav
