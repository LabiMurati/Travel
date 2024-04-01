import React from "react";
import Image from "next/image";
const Guide = () => {
	return (
		<section>
			<div className="flex flex-wrap justify-between gap-5 lg:gap-10 padding-container max-container w-full pb-24 max-sm:pb-12">
				<div className="relative">
					<Image src="/camp.svg" alt="camp" width={50} height={50} />
					<h3 className="uppercase regular-18 -mt-1 mb-3 text-green-50">
						WE ARE HERE FOR YOU
					</h3>
					<h4 className="bold-40 lg:bold-64 xl:max-w-[390px]">
						Guide You to Easy Path
					</h4>
				</div>
				<div className="relative w-[380px]">
					<p className="regular-16 text-gray-30 xl:max-w-[520px]">
						Only with the hilink application you will no longer get lost and get
						lost again, because we already support offline maps when there is no
						internet connection in the field. Invite your friends, relatives and
						friends to have fun in the wilderness through the valley and reach
						the top of the mountain
					</p>
				</div>
			</div>
			<div className="item-center relative w-full">
				<div className="relative w-full h-full">
					<Image
						className="w-full object-cover object-center 2xl:rounded-5xl max-sm:rounded-lg mb-10"
						src="/boat.png"
						alt="boat"
						width={1140}
						height={580}
					/>
				</div>
				<div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20  max-sm:w-full ">
					<Image
						src="/meter.svg"
						alt="meter"
						width="16"
						height="158"
						decoding="async"
						data-nimg="1"
						className="h-full w-auto max-sm:h-40 "
					/>
					<div className="flexBetween flex-col ">
						<div className="flex w-full flex-col ">
							<div className="flexBetween w-full">
								<p className="regular-16 text-gray-20">Destination</p>
								<p className="bold-16 text-green-50">48 min</p>
							</div>
							<p className="bold-20 mt-2">Aguas Calientes</p>
						</div>
						<div className="flex w-full flex-col">
							<p className="regular-16 text-gray-20">Start track</p>
							<h4 className="bold-20 mt-2 whitespace-nowrap">
								Wonorejo Pasuruan
							</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Guide;
