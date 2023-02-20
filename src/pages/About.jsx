import React, { useState } from 'react'
import { Skills, Educations, Works } from '../components'

const AboutUs = () => {
	const [activeTab, setActiveTab] = useState('skills')
	return (
		<div className="w-full h-auto bg-second overflow-hidden" id="About">
			<div className="w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5 "></div>

			<div className="relative w-full md:max-w-[650px] lg:max-w-[850px] xl:max-w-[1100px] mx-auto flex items-center flex-col py-6 px-5">
				<div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-third md:w-[150px] md:h-[150px]">
					<img src="./me.webp" alt="awatar Karlosa" />
				</div>
				<h2 className="text-2xl uppercase font-bold mt-5 mb-1 md:text-3xl xl:text-4xl">about me</h2>
				<h3 className="text-sm text-fourth font-medium md:text-base xl:text-lg">
					17 years<span className="text-white m-1">/</span>Karol <span className="text-white m-1">/</span>
					Freelance
				</h3>
				<p className="mt-5 md:text-base xl:text-lg text-center">
					Greetings, my name is Karol. My main goal while creating internet websites is correct "functionality", thats
					why i care about correct SEO, to make the page highly positioned in our browsers and get as much potentional
					customers as possible, The optimised code which makes the page more efficient.
				</p>
				<div className="w-full mt-4 mb-4 text-lg font-medium transition-all flex items-center justify-evenly lg:justify-center md:mt-5">
					<button
						onClick={() => setActiveTab('skills')}
						className={`${
							activeTab == 'skills' ? 'text-fourth' : 'text-white'
						} uppercase duration-500 text-center px-2 py-1 xl:py-1.5 border border-gray-400 rounded md:min-w-[150px]`}>
						skills
					</button>
					<button
						onClick={() => setActiveTab('educations')}
						className={`${
							activeTab == 'educations' ? 'text-fourth' : 'text-white'
						} uppercase mx-5 duration-500 text-center px-2 py-1 xl:py-1.5 border border-gray-400 rounded md:min-w-[150px]`}>
						educations
					</button>
					<button
						onClick={() => setActiveTab('works')}
						className={`${
							activeTab == 'works' ? 'text-fourth' : 'text-white'
						} uppercase duration-500 text-center px-2 py-1 xl:py-1.5 border border-gray-400 rounded md:min-w-[150px]`}>
						works
					</button>
				</div>
				{activeTab === 'skills' && <Skills />}
				{activeTab === 'educations' && <Educations />}
				{activeTab === 'works' && <Works />}
			</div>
		</div>
	)
}

export default AboutUs
