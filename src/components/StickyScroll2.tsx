"use client";
import React from "react";
import {
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import AppleTvLogo from "../../public/apple_tv_logo.png";
import Image from "next/image";
import screen1 from "../../public/screen_1.jpg";
import screen2 from "../../public/screen_2.jpg";
import screen3 from "../../public/screen_3.jpg";

type Props = {};

const StickyScroll2 = (props: Props) => {
	const scrollRef = useRef(null);
	const ref_sectionOne = useRef(null);
	const ref_sectionTwo = useRef(null);
	const ref_sectionThree = useRef(null);

	const { scrollYProgress: sectionTwoYProgress, scrollY: sectionTwoScrollY } =
		useScroll({
			target: ref_sectionTwo,
			offset: ["start end", "end end"],
		});
	const {
		scrollYProgress: sectionThreeYProgress,
		scrollY: sectionThreeScrollY,
	} = useScroll({
		target: ref_sectionThree,
		offset: ["start end", "end end"],
	});

	const imgTwoYTransform = useTransform(
		sectionTwoYProgress,
		[0.25, 1],
		["0", "-100%"]
	);
	const imgThreeYTransform = useTransform(
		sectionThreeYProgress,
		[0.25, 1],
		["-100%", "-200%"]
	);

	const sectionOneInView = useInView(ref_sectionOne, {
		margin: "0px 0px -25% 0px",
	});
	const sectionTwoInView = useInView(ref_sectionTwo, {
		margin: "0px 0px -25% 0px",
	});
	const sectionThreeInView = useInView(ref_sectionThree, {
		margin: "0px 0px -25% 0px",
	});

	useMotionValueEvent(sectionTwoYProgress, "change", (latest) => {
		console.log("Page scroll: sec 2 ", latest);
	});
	return (
		<div className="w-screen h-[300vh] bg-yellow-900" ref={scrollRef}>
			<div className="relative w-full h-full">
				{/* Screen */}
				<div className="sticky top-0 right-0 h-screen w-full md:w-1/2 float-right z-10 ">
					<motion.div className="h-full flex items-center justify-center ">
						{/* TV */}
						<div className="absolute   w-[max(45vw,500px)] border-[8px] border-black h-[500px] shadow-xl">
							<div className="w-full h-full relative overflow-hidden">
								<motion.div className="w-full h-full">
									<motion.div className="w-full h-full ">
										<Image
											src={screen1}
											alt="screen-1"
											className="object-cover h-full w-full"
										/>
									</motion.div>

									<motion.div
										style={{ y: imgTwoYTransform }}
										className="w-full h-full"
									>
										<Image
											src={screen2}
											alt="screen-1"
											className="object-cover h-full w-full"
										/>
									</motion.div>

									<motion.div
										style={{ y: imgThreeYTransform }}
										className="w-full h-full "
									>
										<Image
											src={screen3}
											alt="screen-1"
											className="object-cover h-full w-full"
										/>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* Sections */}
				<div className="absolute top-0 right-0 h-full w-full ">
					<div>
						{/* Section one  */}
						<section
							ref={ref_sectionOne}
							className="h-screen w-screen bg-gradient-to-r from-[#01CA76] to-[#05D58F]"
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className=" h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#afe9c4]">
											<span className="text-white"> Apple TV app. </span> Watch,
											rent, or buy your favorite shows and movies all in one
											expertly curated app. Enjoy critically acclaimed Apple
											Originals series and films from Apple TV+ as they were
											meant to be seen. Subscribe to just the channels you want.
											And there are no new apps, accounts, or passwords needed
											for up to six family members.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/* Section Two */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#664ABD] to-[#7667EC]"
							ref={ref_sectionTwo}
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className=" h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#beb8d8]">
											<span className="text-white"> Apple TV app. </span> Watch,
											rent, Apple Music. Listen to over 100 million songs,
											30,000 playlists, and live radio on the big screen. You
											can even be your own video star with Apple Music Sing5 —
											sing top songs with real-time lyrics and adjustable vocals
											that let you take the lead, duet with the artist, or belt
											out backup harmonies.4
										</p>
									</div>
								</div>
								<div></div>
							</div>
						</section>
						{/* Section Three*/}
						<section
							ref={ref_sectionThree}
							className="h-screen w-screen bg-gradient-to-r from-[#DE3E3C] to-[#E95D37]"
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className=" h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#beb8d8]">
											<span className="text-white"> Apple TV app. </span> Watch,
											rent, Apple Arcade. Playing Apple Arcade games is even
											more immersive on your big screen.4 Multiuser support
											helps players keep track of their individual game levels,
											leaderboards, and invitations — and switch between players
											at any time. And you can connect more of your favorite
											controllers to Apple TV 4K, including PlayStation and Xbox
											Wireless controllers.6
										</p>
									</div>
								</div>
								<div></div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StickyScroll2;
