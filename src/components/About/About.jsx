import React from "react";

import bg_1 from "../../assets/about_1.png";
import bg_2 from "../../assets/about_2.png";
import bg_3 from "../../assets/about_3.png";
import bg_4 from "../../assets/about_4.png";

const Card = ({ img, title, desc }) => {
	return (
		<div className="w-[300px] flex flex-col rounded-3xl relative mr-5">
			<div className="absolute top-0 rounded-t-3xl">
				<img className="rounded-t-3xl" src={img} />
			</div>
			<div className="bg-gradient-to-t h-[400px] from-50% from-[#190A28] to-black/0 text-white relative z-10 pt-44 rounded-3xl">
				<div className="flex flex-col px-5 py-5">
					<p className="text-2xl font-medium">{title}</p>
					<p className="mt-4">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export const About = () => {
	return (
		<div className="w-full flex flex-col items-start py-32 px-20 2xl:px-32">
			<div className="flex flex-col">
				<p className="uppercase tracking-widest text-[#222222]">
					Say Hello to Assembly
				</p>

				<p className="mt-2 font-medium w-[70%] text-4xl text-[#222222]">
					University events, fests or communities and much more
				</p>

				<p className="mt-5 w-[80%] text-[#222222]">
					Which is the same as saying through shrinking from toil and
					pain. These cases are perfectly simple and easy to
					distinguish.
				</p>
			</div>

			<div className="flex items-stretch mt-20">
				<Card
					img={bg_1}
					title={"Club & Event Listings"}
					desc={
						"Browse through a diverse range of university clubs and their exciting events. From workshops to hackathons, there's something for everyone."
					}
				/>

				<Card
					img={bg_2}
					title={"Personalized Feed"}
					desc={
						"Our smart algorithm suggests clubs and events based on your interests. Say goodbye to endless scrolling - assembly tailors your experience."
					}
				/>

				<Card
					img={bg_3}
					title={"Interest Communities"}
					desc={
						"Connect with like-minded individuals who share your interests. Assembly fosters communities, making it easy to find your tribe."
					}
				/>

				<Card
					img={bg_4}
					title={"Easy Event Tickets"}
					desc={
						"Seamlessly register for events and generate tickets directly from the app. Your one-stop solution for hassle-free event management."
					}
				/>
			</div>
		</div>
	);
};
