import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
	return (
		<div className="flex h-screen w-full bg-[#0a192f] md:bg-[#0B3F30] text-gray-200 justify-center items-center">
			<div className="w-[70%] flex flex-col justify-center mt-20 gap-2 ">
				<p className="text-sm text-gray-400">Hi my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Abayomi Aremo James
				</h1>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I am a Full Stack Developer.🤞💻
				</h1>
				<p className="text-[#8892b0] max-w-[700px] text-sm">
					i am a fullstack developer speciaizing in building (and occasionally
					desiging) exceptional digital experiences. Currently, im focused on
					building responsive full-stack web applications.
				</p>
        <div>
        <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
					View work <span className="hover:rotate-90 duration-300"><FaArrowRight className="ml-3" /></span>
				</button>
        </div>
				
			</div>
		</div>
	);
};

export default Home;
