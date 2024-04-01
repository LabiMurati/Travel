import React from "react";
import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface CampProps {
	backgroundImage: string;
	title: string;
	subtitle: string;
	peopleJoined: string;
}

const CampSite = ({
	backgroundImage,
	title,
	subtitle,
	peopleJoined,
}: CampProps) => {
	return (
		<div 
			style={{ backgroundImage: `url(${backgroundImage}) `  }}
			className=" w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl h-full">
			<div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
				<div className="flexCenter gap-4">
					<div className="rounded-full bg-green-50 p-4">
						<Image src="/folded-map.svg" alt="map" width={28} height={28} />
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="bold-18 text-white">{title}</h4>
						<p className="regular-14 text-white">{subtitle}</p>
					</div>
				</div>
				<div className="flex-center gap-6">
					<span className="flex -space-x-4 overflow-hidden">
						{PEOPLE_URL.map((url) => (
							<Image
								className="inline-block h-10 w-10 rounded-full"
								src={url}
								key={url}
								alt="person"
								width={52}
								height={52}
							/>
						))}
					</span>
					<p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
				</div>
			</div>
		</div>
	);
};

const Camp = () => {
	return (
		<section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py20 xl:mb-20">
			<div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
				<CampSite
					backgroundImage="img-1.png"
					title="Putuk Truno Camp"
					subtitle="Prigen, Pasuruan"
					peopleJoined="50+ Joined"
				/>
				<CampSite
					backgroundImage="img-2.png"
					title="Mountain View Camp"
					subtitle="Somewhere in the Wildernes"
					peopleJoined="50+ Joined"
				/>
					<CampSite
					backgroundImage="img-2.png"
					title="Mountain View Camp"
					subtitle="Somewhere in the Wildernes"
					peopleJoined="50+ Joined"
				/>
				
			</div>

			<div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6 max-sm:px-0">
				<div className="bg-green-50 p-8 lg:max-w-[700px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
					<h2 className="regular-24 md:text-32 2xl:regular-64 font-normal capitalize text-white">
						<strong>Feeling Lost</strong> And Not Knowing The Way?
					</h2>
					<p className="regular-14 xl:regular-16 mt-5 text-white">
						Starting from the anxiety of the climbers when visiting a new
						climbing location, the possibility of getting lost is very large.
						That's why we are here for those of you who want to start an
						adventure.
					</p>
					<Image
						src="quote.svg"
						alt="quote"
						width={186}
						height={219}
						className="absolute bottom-0 right-0 mb-[2rem] mr-[1rem]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Camp;
