import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
	return (
		<section className="flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
			<div className="hero-map"></div>

			<div className="relative z-20 flex flex-1 flex-col">
				<Image src="/camp.svg" alt="camp" width={50} height={50} />
				<h1 className="text-5xl font-bold lg:text-8xl w-full">
					Putuk Truno Camp Area
				</h1>
				<p className="text-base mt-6 text-gray-500 xl:max-w-[520px]">
					We want to be on each of your journeys seeking the satisfaction of
					seeing the incorruptible beauty of nature. We can help you on an
					adventure around the world in just one app
				</p>
				<div className="my-11 flex flex-wrap gap-5">
					<div className="flex items-center gap-2">
						{Array(5)
							.fill(1)
							.map((_, index) => (
								<Image
									key={index}
									src="/star.svg"
									alt="star"
									width={25}
									height={25}
								/>
							))}
					</div>

					<p className="text-xl font-bold text-gray-700">
						198k
						<span className="ml-1 text-xl font-bold text-gray-700">
							Excellent Reviews
						</span>
					</p>
				</div>
				<div className="flex w-full gap-3 flex-col sm:flex-row">
					<Button type="button" title="Download App" color="btn_green" />
					<Button
						type="button"
						title="How we Work"
						icon="/play.svg"
						color="btn_white_text"
					/>
				</div>
			</div>

			<div className="relative flex flex-1 items-start right-[100px] max-sm:right-0 top-[80px] max-sm:justify-center">
				<div className="relative z-20 w-[284px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
					<div className="flex flex-col  ">
						<div className="flex justify-between ">
							<p className="regular-16 text-gray-20">Location</p>
							<Image src="./close.svg" alt="close" width={24} height={24} />
						</div>
						<div className="flex flex-col">
							<div className="flexBetween">
								<p className="bold-20 text-white ">Aguas Calientes</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flexBetween">
								<div className="flex flex-col">
									<p className="regular-16 block text-gray-20">Distance</p>
									<p className="bold-20 text-white">173.28 mi</p>
								</div>
							</div>
							<div className="flexBetween">
								<div className="flex flex-col">
									<p className="regular-16 block text-gray-20">Elevation</p>
									<p className="bold-20 text-white">2.040 km</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
