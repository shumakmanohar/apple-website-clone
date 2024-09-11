"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AppleTvLogo from "../../public/apple_tv_logo.png";
import screen1 from "../../public/screen_1.jpg";
import screen2 from "../../public/screen_2.jpg";
import screen3 from "../../public/screen_3.jpg";

const TestSticky = () => {
	const scrollRef = useRef(null);
	const ref_sectionOne = useRef(null);
	const ref_sectionTwo = useRef(null);
	const ref_sectionThree = useRef(null);

	// Track scroll progress for each section
	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: ref_sectionOne,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: ref_sectionTwo,
		offset: ["start end", "end start"],
	});
	const { scrollYProgress: scrollYProgress3 } = useScroll({
		target: ref_sectionThree,
		offset: ["start end", "end start"],
	});

	// Y-axis transforms for each image
	const yTransform1 = useTransform(scrollYProgress1, [0, 1], ["0%", "-100%"]);
	const yTransform2 = useTransform(scrollYProgress2, [0, 1], ["0%", "-100%"]);
	const yTransform3 = useTransform(scrollYProgress3, [0, 1], ["0%", "-100%"]);

	return (
		<div className="w-screen h-[300vh] bg-yellow-900" ref={scrollRef}>
			<div className="relative w-full h-full">
				{/* Sticky Image Box */}
				<div className="sticky top-0 right-0 h-screen w-full md:w-1/2 float-right z-10">
					<div className="h-full flex items-center">
						<div className="absolute bg-black w-[max(45vw,500px)] border-[8px] border-black h-[500px] shadow-xl">
							<div className="w-full h-full relative overflow-hidden">
								<motion.div
									className="w-full h-full"
									style={{ y: yTransform1 }}
								>
									<Image
										src={screen1}
										alt="screen-1"
										className="object-cover h-full w-full"
									/>
								</motion.div>
								<motion.div
									className="w-full h-full absolute top-0"
									style={{ y: yTransform2 }}
								>
									<Image
										src={screen2}
										alt="screen-2"
										className="object-cover h-full w-full"
									/>
								</motion.div>
								<motion.div
									className="w-full h-full absolute top-0"
									style={{ y: yTransform3 }}
								>
									<Image
										src={screen3}
										alt="screen-3"
										className="object-cover h-full w-full"
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

				{/* Sections */}
				<div className="absolute top-0 right-0 h-full w-full">
					<div>
						{/* Section one */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#01CA76] to-[#05D58F]"
							ref={ref_sectionOne}
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className="h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#afe9c4]">
											<span className="text-white">Apple TV app.</span> Watch,
											rent, or buy your favorite shows and movies...
										</p>
									</div>
								</div>
								<div className="bg-black">
									<div className="h-96 w-96"></div>
								</div>
							</div>
						</section>

						{/* Section two */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#664ABD] to-[#7667EC]"
							ref={ref_sectionTwo}
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className="h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#beb8d8]">
											<span className="text-white">Apple Music.</span> Listen to
											over 100 million songs...
										</p>
									</div>
								</div>
								<div></div>
							</div>
						</section>

						{/* Section three */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#DE3E3C] to-[#E95D37]"
							ref={ref_sectionThree}
						>
							<div className="container mx-auto grid grid-cols-2 h-full">
								<div className="h-full flex items-center justify-center">
									<div className="mx-auto max-w-[320px] w-full">
										<Image
											src={AppleTvLogo}
											alt="Apple logo"
											className="mb-10"
										/>
										<p className="mt-4 scroll-text !text-[#beb8d8]">
											<span className="text-white">Apple Arcade.</span> Playing
											games is even more immersive...
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

export default TestSticky;
