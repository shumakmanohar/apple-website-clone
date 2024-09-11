"use client";

type Props = {};
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { useState } from "react";

const TestHero3 = (props: Props) => {
	const { scrollYProgress, scrollY } = useScroll();

	// Zoom effect for the video
	const videoScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);
	const videoOpacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

	// Static image opacity and fixed size
	const imageOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

	// Control video visibility based on scroll position
	const [showVideo, setShowVideo] = useState(true);

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest);
		console.log("Page scroll: yprogress", latest);
	});
	return (
		<section className="relative w-full h-[200vh]">
			{/* Sticky Container */}
			<div className="sticky top-0 h-screen w-full flex items-center justify-center">
				<AnimatePresence>
					{/* Video Component */}
					{showVideo && (
						<motion.div
							className="absolute inset-0 flex items-center justify-center"
							style={{ scale: videoScale, opacity: videoOpacity }}
							exit={{ opacity: 0, transition: { duration: 0.5 } }} // Smooth exit
						>
							<video
								src="/hero_vid.mp4"
								autoPlay
								loop
								muted
								className="w-full h-full object-cover"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Static Image Component */}
				<motion.div
					className="absolute top-[10vh] w-[900px] flex items-center justify-center"
					style={{ opacity: imageOpacity }}
				>
					<img
						src="/hero_dino.jpg"
						alt="Static image"
						className="w-full h-auto object-cover"
					/>
				</motion.div>

				<div className="relative z-10 flex items-center justify-center h-full text-white">
					<h1 className="text-4xl md:text-6xl font-bold">Your Hero Content</h1>
				</div>
			</div>
		</section>
	);
};

export default TestHero3;
