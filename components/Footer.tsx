import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<div>
			<div className=" w-full flex mb-20">
				<div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ">
					<ul className="flex items-center justify-center">
						<li>
							<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
						</li>
					</ul>
					<ul className="regular-14 flex flex-col gap-4 text-gray-30">
						<span className="bold-18 whitespace-nowrap text-black">
							Learn More
						</span>
						<a href="">
							<li>About Hilink</li>
						</a>
						<a href="">
							<li>Press Releases</li>
						</a>
						<a href="">
							<li>Jobs</li>
						</a>
						<a href="">
							<li>Privacy Policy</li>
						</a>
						<a href="">
							<li>Contact Us</li>
						</a>
					</ul>
					<ul className="regular-14 flex flex-col gap-4 text-gray-30">
						<span className="bold-18 whitespace-nowrap text-black">
							Learn More
						</span>

						<a href="">
							<li>About Hilink</li>
						</a>
						<a href="">
							<li>Press Releases</li>
						</a>
						<a href="">
							<li>Jobs</li>
						</a>
						<a href="">
							<li>Privacy Policy</li>
						</a>
						<a href="">
							<li>Contact Us</li>
						</a>
					</ul>
					<ul className="regular-14 flex flex-col gap-4 text-gray-30">
						<span className="bold-18 whitespace-nowrap text-black">
							Learn More
						</span>

						<a href="">
							<li>About Hilink</li>
						</a>
						<a href="">
							<li>Press Releases</li>
						</a>
						<a href="">
							<li>Jobs</li>
						</a>
						<a href="">
							<li>Privacy Policy</li>
						</a>
						<a href="">
							<li>Contact Us</li>
						</a>
					</ul>
					<ul className="regular-14 flex flex-col gap-4 text-gray-30">
						<span className="bold-18 whitespace-nowrap text-black">
							Learn More
						</span>

						<a href="">
							<li>About Hilink</li>
						</a>
						<a href="">
							<li>Press Releases</li>
						</a>
						<a href="">
							<li>Jobs</li>
						</a>
						<a href="">
							<li>Privacy Policy</li>
						</a>
						<a href="">
							<li>Contact Us</li>
						</a>
					</ul>
				</div>
			</div>
			<div className="border bg-gray-20 mb-12"></div>
			<p className="regular-15 w-full text-center font-bold text-gray-30 mb-12">
				2024 Labi | All rights reserved
			</p>
		</div>
	);
};

export default Footer;
