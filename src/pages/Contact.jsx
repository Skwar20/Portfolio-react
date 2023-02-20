import React from 'react'

const Contact = () => {
	return (
		<div className="h-auto bg-second overflow-hidden" id="Contact">
			<div className="w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5 "></div>
			<div className="relative w-full md:max-w-[650px] xl:max-w-[1300px] flex items-center flex-col mx-auto py-6 pb-12 px-5">
				<h2 className="relative text-2xl uppercase font-bold mt-5 mb-9 md:text-3xl after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-[1px] after:bg-fourth">
					Contact
				</h2>
				<form
					action="https://formsubmit.co/ak5224208@gmail.com"
					method="POST"
					className="w-2/3 flex flex-col items-center text-white">
					<input
						type="email"
						name="email"
						className="w-full h-10 rounded-md outline-none bg-third border  hover:border-fourth focus:border-fourth duration-500 p-4"
						placeholder="Email address"
						required
					/>
					<input
						type="text"
						name="name"
						className="w-full h-10 rounded-md outline-none bg-third border  hover:border-fourth focus:border-fourth duration-500 p-4 my-5"
						placeholder="Name"
						required
					/>
					<textarea
						name="message"
						rows="9"
						className="w-full rounded-md outline-none bg-third border  border-fourth focus:border-fourth duration-500 p-4 my-5"
						placeholder="Your message"
						required></textarea>
					<input type="hidden" name="_next" value="http://localhost:5173/form"></input>
					<button className="h-9 text-white w-2/4 md:w-1/3 rounded-2xl border" type="submit">
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
