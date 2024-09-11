import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";

type Props = {};

const TestHero2 = (props: Props) => {
	const { scrollYProgress, scrollY } = useScroll();

	// Zoom effect for both video and image
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.33]);

	// Opacity transitions: video fades out, image fades in
	const videoOpacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);
	const imageOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

	const yPosition = useTransform(scrollYProgress, [0, 0.5], [0, -200]);

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest);
	});

	return (
		<section className="relative w-full h-[200vh]">
			{/* Sticky Container */}
			<div className="sticky top-0 h-screen w-full flex items-center justify-center">
				{/* Video Component */}
				<AnimatePresence>
					<motion.div
						className="absolute inset-0 flex items-center justify-center"
						style={{ scale, y: yPosition, opacity: videoOpacity }}
					>
						<video
							src="/hero_vid.mp4"
							autoPlay
							loop
							muted
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</AnimatePresence>
				{/* Static Image Component */}
				<motion.div
					className="absolute inset-0 flex items-center justify-center"
					style={{ scale, y: yPosition, opacity: imageOpacity }}
				>
					<img
						src="/hero_dino.jpg"
						alt="Static image"
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

export default TestHero2;
