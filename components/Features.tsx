import React from "react";
import Image from "next/image";

const boxes = [
	{
		title: "Real Maps Can Be Offline",
		description:
			"We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
		imageSrc: "/map.svg",
	},
	{
		title: "Set An Adventure Schedule",
		description: `Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion`,
		imageSrc: "/map.svg",
	},
	{
		title: `Technology Using Augment Reality`,
		description: `Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection`,
		imageSrc: "/map.svg",
	},
	{
		title: "Many new locations every month",
		description:
			"Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
		imageSrc: "/map.svg",
	},
];

const Features = () => {
	return (
		<div className="w-full overflow-hidden">
			<div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto top-[100px]">
				<div
					className="w-full bg-cover bg-no-repeat"
					style={{
						height: "80vh",
						backgroundImage: 'url("/back-removebg-preview.png")',
					}}>
					<div className="flex flex-wrap justify-around items-center h-full">
						<div className="w-full md:w-1/2 lg:w-1/3 p-5">
							<Image
								src="/phone.png"
								alt="phone"
								width={400}
								height={400}
								className="mx-auto"
								layout="intrinsic"
							/>
						</div>
						<div className="w-full md:w-1/2 lg:w-2/3 p-5 text-center md:text-left">
							<Image
								src="/camp.svg"
								alt="camp"
								width={50}
								height={50}
								className="inline-block"
							/>
							<h2 className="text-3xl lg:text-5xl font-bold my-5">
								Our Features
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{boxes.map((box, index) => (
									<div
										key={index}
										className="flex flex-col items-center md:items-start p-4">
										<div className="bg-green-50 rounded-full p-3 inline-flex items-center justify-center">
											<Image
												src={box.imageSrc}
												alt="feature icon"
												width={30}
												height={30}
											/>
										</div>
										<h3 className="mt-5 text-xl font-bold">{box.title}</h3>
										<p className="mt-2 text-sm md:text-base">
											{box.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
