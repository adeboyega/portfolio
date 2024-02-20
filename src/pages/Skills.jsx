import React from "react";
import Aws from "../assets/aws.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Skills = () => {
	return (
		<div className="flex flex-col h-screen w-full bg-[#0a192f] md:bg-[#0B3F30] justify-center items-center">
			<div className=" sm:text-right pb-8 pl-4">
				<h1 className="text-4xl font-bold inline border-b-4 border-pink-600">
					Experience
				</h1>
				<h1 className="text-sm font-bold mt-4 text-[#8892b0]">
					// These are the technologies i've worked with
				</h1>
			</div>
			<div className="flex flex-col">
				<div className="flex md:flex-col gap-3 ">
					<div className="grid sm:flex gap-3">
						<div className=" shadow-xl px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={javascript} alt="javescript" />
							<p className="mt-4">javascript</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={html} alt="javescript" />
							<p className="mt-4">html</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={react} alt="javescript" />
							<p className="mt-4">React</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={mongodb} alt="javescript" />
							<p className="mt-4">mongo</p>
						</div>
					</div>
					<div className="grid sm:flex gap-3 ">
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={node} alt="javescript" />
							<p className="mt-4">Node JS</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={github} alt="javescript" />
							<p className="mt-4">github</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={firebase} alt="javescript" />
							<p className="mt-4">firebase</p>
						</div>
						<div className=" shadow-lg px-6 py-3 w-[140px] hover:scale-105 duration-300">
							<img src={Aws} alt="javescript" />
							<p className="mt-4">Amazon web services</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
