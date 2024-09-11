"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AppleTvLogo from "../../public/apple_tv_logo.png";
import screen1 from "../../public/screen_1.jpg";
import screen2 from "../../public/screen_2.jpg";
import screen3 from "../../public/screen_3.jpg";

type Props = {};

const StickyScroll3 = (props: Props) => {
	const scrollRef = useRef(null);
	const { scrollYProgress, scrollY } = useScroll({
		target: scrollRef,
	});
	const sectionOneRef = useRef<HTMLDivElement | null>(null);
	const tvDivRef = useRef<HTMLDivElement | null>(null);
	const ref = useRef(null);

	// Function to check if section one has hit the bottom of the TV div
	const isSectionAtBottom = () => {
		if (sectionOneRef.current && tvDivRef.current) {
			const sectionOneRect = sectionOneRef.current.getBoundingClientRect();
			const tvDivRect = tvDivRef.current?.getBoundingClientRect();

			// Check if the bottom of section one is aligned with the bottom of the TV div
			return (
				sectionOneRect.bottom >= tvDivRect.top &&
				sectionOneRect.top <= tvDivRect.bottom
			);
		}
		return false;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isSectionAtBottom()) {
				// Trigger your action when the section hits the TV div
				console.log("Section one hit the TV div");
				// You can add additional logic here, like changing styles, etc.
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	// Dynamically calculate the scroll range and adjust it to match your sections
	const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
	return (
		<div className="w-screen h-[300vh] bg-yellow-900" ref={scrollRef}>
			<div className="relative w-full h-full">
				{/* Screen */}
				<div className="sticky top-0 right-0 h-screen w-full md:w-1/2 float-right z-10 ">
					<motion.div ref={ref} className="h-full flex items-center">
						{/* TV */}
						<div
							className="absolute   bg-black w-[max(45vw,500px)] border-[8px] border-black h-[500px] shadow-xl"
							ref={tvDivRef}
						>
							<div className="w-full h-full relative overflow-hidden">
								<motion.div className="w-full h-full" style={{ y: yTransform }}>
									<Image
										src={screen1} // Adjust image source as per section
										alt="screen-1"
										className="object-cover h-full w-full"
									/>
									<Image
										src={screen2} // Adjust image source as per section
										alt="screen-1"
										className="object-cover h-full w-full"
									/>
									<Image
										src={screen3} // Adjust image source as per section
										alt="screen-1"
										className="object-cover h-full w-full"
									/>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* Sections */}
				<div className="absolute top-0 right-0 h-full w-full ">
					<div>
						{/* Section one */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#01CA76] to-[#05D58F]"
							ref={sectionOneRef}
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
								<div className="bg-black">
									<div className="h-96 w-96"></div>
								</div>
							</div>
						</section>
						{/* Section two */}
						<section
							className="h-screen w-screen bg-gradient-to-r from-[#01CA76] to-[#05D58F]"
							ref={sectionOneRef}
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
								<div className="bg-black">
									<div className="h-96 w-96"></div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StickyScroll3;
