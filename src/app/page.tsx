"use client";

import CarouselSection from "@/components/CarouselSection";
import Navbar from "@/components/Navbar";
import StickyScroll from "@/components/StickyScroll";
import StickyScroll2 from "@/components/StickyScroll2";
import TestHero4 from "@/components/TestHero4";

export default function Home() {
	return (
		<div>
			<Navbar />

			<TestHero4 />
			<CarouselSection />
			<StickyScroll />
			<StickyScroll2 />
			<div className="h-[300vh]"></div>
		</div>
	);
}
