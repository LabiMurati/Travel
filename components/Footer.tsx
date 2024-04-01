import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="max-container  padding-container">
			<div className="w-full flex flex-wrap mb-20">
				<div className="flex flex-wrap gap-10 justify-between w-full px-5 sm:px-10">
					<ul className="flex items-center justify-center w-full sm:w-auto">
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
