"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScroll({ endValue = "-100%" }) {
	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["0 1", "end start"],
	});
	const imgArray = ["/caro1.jpg", "/caro2.jpg", "/caro3.jpg"];
	const data = Array(35).fill("erw");

	// Transform scroll position to horizontal movement
	const x = useTransform(scrollYProgress, [0, 1], ["0%", endValue]);

	return (
		<div>
			<div className="flex gap-3 overflow-hidden my-10" ref={scrollRef}>
				{/* Example sections or images */}
				{data.map((data, _indx) => (
					<motion.div
						style={{ x }}
						key={_indx}
						className="w-[20vw] shrink-0 rounded-2xl"
					>
						<img
							src={imgArray[Math.floor(Math.random() * imgArray.length)]}
							alt=""
							className="w-full rounded-2xl"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
}
