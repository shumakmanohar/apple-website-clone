"use client";
import Image from "next/image";
import heroGradient from "../../public/hero_gradient.png";
import heroTvRemote from "../../public/hero_tvremote.png";

//w-[918px] h-[516px]
const Hero = () => {
	return (
		<div className="bg-black h-[200vh]">
			<div className="">
				<div className="mt-[3vh] bg-orange-300 sticky top-0 flex items-center justify-center">
					<div className="relative">
						<div className="relative border-gray-800 border-[10px] w-[50vw]">
							{/* <Image src={heroDyno} alt="Tv remote" className="bg-cover" /> */}
							<video autoPlay loop muted controls width={"100%"}>
								<source
									src="/hero_vid.mp4"
									type="video/mp4"
									className="scale-150"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center  w-full mt-4">
					<Image
						src={heroGradient}
						alt="hero gradient"
						className="blur-md"
						width={900}
					/>
					<Image
						src={heroTvRemote}
						alt="hero gradient"
						className="-translate-y-[40%]"
						width={400}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
