import { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import divider from "../../assets/star_divider.svg";

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});
	}, []);
	return (
		<nav
			className={`flex ${
				scrolled ? "bg-white/60 backdrop-blur-lg" : ""
			} justify-between py-5 px-10 font-raleway fixed w-full z-50 transition ease-in delay-100`}
		>
			<div className="flex items-center">
				<div>
					<img className="w-8" src={logo} />
				</div>
				<div>
					<p className="text-xl font-medium ml-2">assembly</p>
				</div>
			</div>

			<div className="flex items-center">
				<div className="flex items-center">
					<ul className="flex items-center text-sm text-[#222222]">
						<li className="cursor-pointer">HOME</li>
						<li className="mx-4">
							<img src={divider} />
						</li>
						<li className="cursor-pointer">ABOUT US</li>
						<li className="mx-4">
							<img src={divider} />
						</li>
						<li className="cursor-pointer">DISCOVER</li>
						<li className="mx-4">
							<img src={divider} />
						</li>
						<li className="cursor-pointer">CONTACT US</li>
					</ul>
				</div>
				<div className="flex items-center ml-10">
					<div className="rounded-full font-medium bg-black py-2 px-6 text-sm cursor-pointer text-white">
						LOG IN
					</div>

					<div className="rounded-full font-medium bg-black py-2 px-6 text-sm cursor-pointer text-white ml-2">
						SIGN UP
					</div>
				</div>
			</div>
		</nav>
	);
};
