import React from "react";

import logo from "../../assets/logo.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
	return (
		<footer className="w-full flex flex-col px-32 bg-[#000000] text-white">
			<div className="w-full flex justify-between py-16">
				<div className="flex flex-col">
					<div className="flex items-center">
						<div>
							<img className="w-8" src={logo} />
						</div>
						<div>
							<p className="text-xl font-medium ml-2">assembly</p>
						</div>
					</div>

					<div className="mt-2">
						<p className="text-sm">The student superapp</p>
					</div>
				</div>

				<div className="flex">
					<div className="flex flex-col mr-20">
						<p className="font-bold mb-2">Quick Links</p>

						<p className="mb-2">Home</p>
						<p className="mb-2">About Us</p>
						<p className="mb-2">Discover</p>
						<p className="mb-2">Contact</p>
					</div>

					<div className="flex flex-col mr-32">
						<div className="mb-5">
							<p className="font-bold">Email</p>
							<p className="mt-1">contact@assembly.fun</p>
						</div>
						<div className="mb-5">
							<p className="font-bold">Phone Number</p>
							<p className="mt-1">+91 000000000</p>
						</div>
						<div>
							<p className="font-bold">Address</p>
							<p className="mt-1">#1234</p>
						</div>
					</div>

					<div className="flex flex-col">
						<p className="font-bold mb-2">Follow Us</p>

						<div className="flex">
							<div className="mr-2">
								<LinkedInIcon />
							</div>
							<div className="mr-2">
								<InstagramIcon />
							</div>
							<div className="mr-2">
								<YouTubeIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-center py-5">
				<p className="text-sm">
					© {new Date().getFullYear()} Assembly. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
