"use client";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { useState } from "react";

type Props = {};

const TestHero5 = (props: Props) => {
	const { scrollYProgress, scrollY } = useScroll();

	// Zoom effect for the video
	const videoScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.5]);
	const videoOpacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

	const yPosition = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

	// Control video visibility based on scroll position
	const [showVideo, setShowVideo] = useState(true);
	const [showImage, setShowImage] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 850) {
			setShowVideo(false); // Remove video
			setShowImage(true); // Show image immediately
		} else {
			setShowVideo(true); // Show video initially
			setShowImage(false); // Hide image until video is gone
		}
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
							style={{ scale: videoScale, y: yPosition, opacity: videoOpacity }}
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
				{showImage && (
					<div className="absolute inset-0 flex items-center justify-center">
						<img
							src="/hero_dino.jpg"
							alt="Static image"
							className="w-full h-full object-cover"
						/>
					</div>
				)}

				<div className="relative z-10 flex items-center justify-center h-full text-white">
					<h1 className="text-4xl md:text-6xl font-bold">Your Hero Content</h1>
				</div>
			</div>
		</section>
	);
};

export default TestHero5;
