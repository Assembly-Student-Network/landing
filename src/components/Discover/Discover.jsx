import React from "react";

import mob_1 from "../../assets/mobile_1.svg";
import mob_2 from "../../assets/mobile_2.svg";
import mob_3 from "../../assets/mobile_3.svg";

export const Discover = () => {
	return (
		<div className="w-full py-32 flex flex-col items-center px-20 2xl:px-32">
			<p className="text-5xl w-[55%] 2xl:w-[40%] text-center text-[#222222]">
				Discover the Power-Packed Features of Our App
			</p>

			<div className="relative flex mt-16">
				<div className="mr-5 z-10">
					<img className="w-[250px]" src={mob_1} />
				</div>
				<div className="mr-5 z-10">
					<img className="w-[250px]" src={mob_2} />
				</div>
				<div className=" z-10">
					<img className="w-[250px]" src={mob_3} />
				</div>

				<div className="w-[600px] h-[600px] rounded-full blur-3xl absolute bg-[#C89DFF]/20 -translate-x-1/2 left-1/2"></div>
			</div>

			<p className="text-[#222222] w-[40%] text-center mt-20">
				Don't miss out on the university experience. Assembly brings
				students together, one club at a time. Start exploring,
				connecting, and engaging today!
			</p>
		</div>
	);
};
