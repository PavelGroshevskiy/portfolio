import React from "react";
import pizzaImg from "../public/assets/projects/pizza.png";
import mernBlogImg from "../public/assets/projects/mern-blog.png";
import tjImg from "../public/assets/projects/tj.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Pizza shop"
						backgroundImg={pizzaImg}
						projectUrl="/pizza"
						tech="React JS"
					/>
					<ProjectItem
						title="Mern blog"
						backgroundImg={mernBlogImg}
						projectUrl="/mern-blog"
						tech="React JS"
					/>
					<ProjectItem
						title="RJournal App"
						backgroundImg={tjImg}
						projectUrl="/tj"
						tech="In Progress"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
