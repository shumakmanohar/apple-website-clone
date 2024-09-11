"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollingSection = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const pinnedTransform = useTransform(
		scrollYProgress,
		[0, 0.9],
		["0%", "100%"]
	);

	return (
		<div className="h-screen overflow-x-hidden">
			<div ref={containerRef} className="w-screen">
				{/* Section 1 */}
				<div className="flex h-screen">
					<motion.div className="flex-1 bg-gray-100 p-10">
						<h1 className="text-4xl">Section 1 Text</h1>
						<p>This is the first section.</p>
					</motion.div>
					<motion.div
						className="flex-1 bg-blue-300"
						style={{ translateY: pinnedTransform }}
					>
						<img
							src="/path-to-image.jpg"
							alt="Section 1 Image"
							className="h-full w-full object-cover"
						/>
					</motion.div>
				</div>

				{/* Section 2 */}
				<div className="flex h-screen">
					<motion.div className="flex-1 bg-gray-200 p-10">
						<h1 className="text-4xl">Section 2 Text</h1>
						<p>This is the second section.</p>
					</motion.div>
					<motion.div
						className="flex-1 bg-blue-400"
						style={{ translateY: pinnedTransform }}
					>
						<video
							src="/path-to-video.mp4"
							autoPlay
							loop
							muted
							className="h-full w-full object-cover"
						></video>
					</motion.div>
				</div>

				{/* More sections can be added here */}

				{/* Continue normal scroll after sections */}
				<div className="h-[200vh] bg-gray-300">
					<h1 className="text-4xl p-10">Normal Scroll Starts Here</h1>
					<p>Scroll continues as usual after pinned sections.</p>
				</div>
			</div>
		</div>
	);
};

export default ScrollingSection;
