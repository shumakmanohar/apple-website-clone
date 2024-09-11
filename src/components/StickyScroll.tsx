import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AppleTvLogo from "../../public/apple_tv_logo.png";
import Image from "next/image";
import screen1 from "../../public/screen_1.jpg";
import screen2 from "../../public/screen_2.jpg";

type Props = {};

const StickyScroll = (props: Props) => {
	const ref = useRef(null);
	const ref_sectionOne = useRef(null);
	const ref_sectionTwo = useRef(null);
	const ref_sectionThree = useRef(null);

	const sectionOneInView = useInView(ref_sectionOne);
	const sectionTwoInView = useInView(ref_sectionTwo);
	const sectionThreeInView = useInView(ref_sectionThree);

	return (
		<div className="container mx-auto h-[300vh] mt-40">
			{/* Container for all sections */}
			<div className="relative w-full h-full">
				{/* Right side sticky image/video container */}
				<div className="sticky top-0 right-0 h-screen w-full md:w-1/2 float-right">
					<motion.div
						ref={ref}
						className="h-full flex items-center"
						initial={{ opacity: 0.8 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						{sectionTwoInView ? (
							<div className="absolute   bg-black w-[max(45vw,500px)] border-[8px] border-black h-[500px] shadow-xl">
								<video
									className="object-cover h-full w-full"
									autoPlay
									muted
									loop
									src="/hero_vid.mp4"
								/>
							</div>
						) : (
							<div className="absolute   bg-black w-[max(45vw,500px)] border-[8px] border-black h-[500px] shadow-xl">
								<div className="w-full h-full">
									<Image
										src={sectionThreeInView ? screen2 : screen1}
										alt="screen-1"
										className="object-cover h-full w-full"
									/>
								</div>
							</div>
						)}

						{/* Replace src based on the section */}

						{/* For an image, you can replace with img tag */}
					</motion.div>
				</div>

				{/* Scrollable text sections on the left */}
				<div className="absolute left-0 top-0 md:w-1/2 ">
					{/* Section -1  */}
					<div className="h-screen flex items-center">
						<div className="mx-auto max-w-[320px]">
							<p className="mt-4 scroll-text" ref={ref_sectionOne}>
								<span className="text-black"> Apple TV app. </span> Watch, rent,
								or buy your favorite shows and movies all in one expertly
								curated app. Enjoy critically acclaimed Apple Originals series
								and films from Apple TV+ as they were meant to be seen.
								Subscribe to just the channels you want. And there are no new
								apps, accounts, or passwords needed for up to six family
								members.
							</p>
							<p className="scroll-text pt-36">
								<span className="text-black"> Live TV. </span>
								Apple TV 4K is all you need to stream live TV from the world’s
								biggest and best networks, broadcasters, and pay TV providers.
								Watch sports from ESPN and MLB. Catch up with news from ABC,
								CNN, and Bloomberg. And kick back with shows on Hulu, YouTube
								TV, and Sling TV.3
							</p>
						</div>
					</div>
					{/* Section -2 */}
					<div className="h-screen flex items-center">
						<div className="mx-auto max-w-[320px]">
							<Image src={AppleTvLogo} alt="Apple logo" className="mb-10" />
							<p className="mt-4 scroll-text" ref={ref_sectionTwo}>
								<span className="text-black"> Apple TV app. </span> Watch, rent,
								or buy your favorite shows and movies all in one expertly
								curated app. Enjoy critically acclaimed Apple Originals series
								and films from Apple TV+ as they were meant to be seen.
								Subscribe to just the channels you want. And there are no new
								apps, accounts, or passwords needed for up to six family
								members.
							</p>
						</div>
					</div>
					{/* Section -3  */}
					<div className="h-screen flex items-center">
						<div className="mx-auto max-w-[320px]">
							<p className="mt-4 scroll-text" ref={ref_sectionThree}>
								<span className="text-black"> Apple TV app. </span> Watch, rent,
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Molestias, sequi. Doloremque reprehenderit, provident, facilis
								nemo perferendis explicabo doloribus necessitatibus natus quas
								culpa nisi eos rerum dolore, fugiat quos accusantium iusto ullam
								voluptatem at nulla sunt.
							</p>
						</div>
					</div>
					{/* Section -4 
					<div className="h-screen flex items-center">
						<div className="p-8">
							<h1 className="text-4xl font-bold">Section 4 Title</h1>
							<p className="mt-4 text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section
								4 content.
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default StickyScroll;
