import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const TestHero = () => {
	const { scrollYProgress } = useScroll();

	// Control zoom-out effect based on scroll position
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const yPosition = useTransform(scrollYProgress, [0, 0.5], [0, -200]); // Move the video up when scaling
	return (
		<section className="relative w-full h-[200vh]">
			{/* Sticky Container */}
			<div className="sticky top-0 h-screen w-full flex items-center justify-center">
				<motion.div
					className="absolute inset-0 flex items-center justify-center border-gray-800 border-[10px]"
					style={{ scale, y: yPosition }}
				>
					<video
						src="/hero_vid.mp4"
						loop
						muted
						className="w-full h-full object-cover"
					/>
				</motion.div>
				<div className="relative z-10 flex items-center justify-center h-full text-white">
					<h1 className="text-4xl md:text-6xl font-bold">Your Hero Content</h1>
				</div>
			</div>
		</section>
	);
};

export default TestHero;
