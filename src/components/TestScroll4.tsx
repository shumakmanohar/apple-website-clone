"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {};

const TestScroll4 = (props: Props) => {
	const sectionRefs = [useRef(null), useRef(null), useRef(null)];
	const stickyRef = useRef(null);

	// Use InView for each section
	const sectionInView1 = useInView(sectionRefs[0], { root: stickyRef });
	const sectionInView2 = useInView(sectionRefs[1]);
	const sectionInView3 = useInView(sectionRefs[2]);

	// Log when section enters the sticky box
	if (sectionInView1) console.log("Section 1 entered the box");
	if (sectionInView2) console.log("Section 2 entered the box");
	if (sectionInView3) console.log("Section 3 entered the box");
	return (
		<div className="relative">
			{/* Sections */}
			<div className="h-[100vh] bg-red-500" ref={sectionRefs[0]}>
				<h1>Section 1</h1>
			</div>
			<div className="h-[100vh] bg-green-500" ref={sectionRefs[1]}>
				<h1>Section 2</h1>
			</div>
			<div className="h-[100vh] bg-blue-500" ref={sectionRefs[2]}>
				<h1>Section 3</h1>
			</div>

			{/* Sticky Box */}
			<div
				ref={stickyRef}
				style={{ overflow: "scroll" }}
				className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-black"
			>
				<h2 className="text-center">Sticky Box</h2>
			</div>
		</div>
	);
};

export default TestScroll4;
