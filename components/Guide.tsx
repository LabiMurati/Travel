import React from "react";
import Image from "next/image";

const Guide = () => {
	return (
		<section>
			<div className="flex flex-wrap justify-between gap-5 lg:gap-10 padding-container max-w-full pb-24 sm:pb-12">
				<div className="flex-1 min-w-[290px] lg:min-w-0">
					<Image
						src="/camp.svg"
						alt="camp"
						width={50}
						height={50}
						layout="fixed"
					/>
					<h3 className="uppercase regular-18 -mt-1 mb-3 text-green-50">
						WE ARE HERE FOR YOU
					</h3>
					<h4 className="bold-40 lg:bold-64 xl:max-w-[390px]">
						Guide You to Easy Path
					</h4>
				</div>
				<div className="flex-1 min-w-[290px] lg:w-[380px] lg:max-w-none">
					<p className="regular-16 text-gray-30 xl:max-w-[520px]">
						Only with the hilink application will you no longer get lost, as we
						support offline maps even without an internet connection. Invite
						your friends and family to explore the wilderness, traverse valleys,
						and reach mountain peaks together.
					</p>
				</div>
			</div>
			<div className="item-center relative w-full">
				<div className="relative w-full h-full ">
					<Image
						className="w-full object-cover object-center 2xl:rounded-5xl sm:rounded-lg mb-10 max-sm:h-[210px] max-sm:mb-[50px]"
						src="/boat.png"
						alt="boat"
						width={1140}
						height={580}
						layout="responsive"
					/>
				</div>
				<div className="absolute flex  bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md left-5% top-20 sm:top-[30%] sm:left-0 sm:right-0 sm:mx-auto sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[20%] 2xl:left-[-70%] sm:w-auto max-sm:left-[10%] max-sm:top[70%]">
					<Image
						src="/meter.svg"
						alt="meter"
						width={16}
						height={158}
						layout="fixed"
					/>
					<div className="flex flex-col justify-between">
						<div>
							<div className="flex justify-between w-full">
								<p className="regular-16 text-gray-20">Destination</p>
								<p className="bold-16 text-green-50">48 min</p>
							</div>
							<p className="bold-20 mt-2">Aguas Calientes</p>
						</div>
						<div>
							<p className="regular-16 text-gray-20">Start track</p>
							<h4 className="bold-20 mt-2">Wonorejo Pasuruan</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Guide;
