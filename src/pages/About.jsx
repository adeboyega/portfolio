import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="flex h-screen w-full bg-[#0a192f] md:bg-[#0B3F30] justify-center items-center">
			<div className="flex flex-col justify-center item-center w-full h-full">
				<div className="flex flex-col max-w-[1000px] w-[70%] md:grid grid-cols-2 md:gap-8 mx-auto">
					<div className="sm:text-right pb-8 pl-4">
						<h1 className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</h1>
						<h1 className="text-4xl font-bold mt-4 text-[#8892b0]">
							Hi there 👋. I'm Yomi, nice to meet you, Please take a look
							around!
						</h1>
					</div>
					<div className="max-w-[1000px] w-full grid sm:grid-cols gap-8 px-4">
						<p className="text-[#8892b0]">
							I'm passionate about building quality solutions and exploring
							modern innovations in technology. As a developer, i possess an
							obsessive attention to detail, and undying love in building
							solutions that make a difference
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
