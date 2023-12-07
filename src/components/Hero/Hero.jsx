import React from "react";

import hero from "../../assets/hero.png";
import star from "../../assets/star_divider.svg";

export const Hero = () => {
	return (
		<div className="w-full h-screen min-h-screen flex items-center font-raleway relative">
			<div className="flex flex-col w-1/2 px-10 items-center justify-center">
				<div className="flex flex-col w-[80%] 2xl:w-[65%] items-start">
					<p className="text-6xl font-bold ">
						Discover the Best Clubs, Events, and Festivals
					</p>

					<p className="mt-5 font-medium">
						The student super app to find the event, join the clubs,
						and attend the hackathon that you always wanted to.
						Don't have to follow a million pages on instagram
						anymore.
					</p>

					<div className="rounded-full py-4 px-10 text-white uppercase font-semibold bg-[#9747FF] mt-5">
						Join Now
					</div>
				</div>
			</div>

			<div className="flex flex-col w-1/2 relative px-10">
				<img className="w-[600px]" src={hero} />
			</div>

			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 top-[25%] left-[20%] w-4"
				src={star}
			/>
			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 top-[55%] left-[5%] w-4"
				src={star}
			/>
			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 bottom-[20%] left-[15%] w-4"
				src={star}
			/>
			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 top-[20%] right-[10%] w-4"
				src={star}
			/>
			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 top-[60%] right-[45%] w-4 z-20"
				src={star}
			/>
			<img
				className="absolute -translate-y-1/2 -translate-x-1/2 top-[20%] right-[22%] 2xl:right-[30%] w-4 z-20"
				src={star}
			/>
		</div>
	);
};
