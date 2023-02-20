import React from 'react'

const LinkNav = ({}) => {
	return (
		<div>
			<ul className="md:flex">
				<li className="navLink xl:text-lg">
					<a href="#Home">Home</a>
				</li>
				<li className="navLink xl:text-lg">
					<a href="#About">About me</a>
				</li>
				<li className="navLink xl:text-lg">
					<a href="#Portfolio">Portfolio</a>
				</li>
				<li className="navLink xl:text-lg">
					<a href="#Contact">Contact</a>
				</li>
			</ul>
		</div>
	)
}

export default LinkNav
