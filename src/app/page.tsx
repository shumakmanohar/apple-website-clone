"use client";

import CarouselSection from "@/components/CarouselSection";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import Navbar from "@/components/Navbar";
import ScrollingSection from "@/components/ScrollSection";
import StickyScroll from "@/components/StickyScroll";
import StickyScroll2 from "@/components/StickyScroll2";
import StickyScroll3 from "@/components/StickyScroll3";
import HeroSection from "@/components/Test6";
import TestHero from "@/components/TestHero";
import TestHero2 from "@/components/TestHero2";
import TestHero3 from "@/components/TestHero3";
import TestHero4 from "@/components/TestHero4";
import TestHero5 from "@/components/TestHero5";
import TestScroll4 from "@/components/TestScroll4";
import TestSticky from "@/components/TestSticky";
import TestHero7 from "@/components/TextHero7";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navbar />
			{/* <TestHero /> */}
			{/* <TestHero2 /> */}
			{/* <Hero /> */}
			{/* <TestHero3 /> */}
			<TestHero4 />
			<CarouselSection />
			<StickyScroll />
			<StickyScroll2 />
			{/* <TestScroll4 /> */}
			{/* <StickyScroll3 /> */}
			{/* <TestSticky /> */}
			{/* <ScrollingSection /> */}

			{/* <TestHero5 /> */}
			{/* <HeroSection /> */}
			{/* <TestHero7 /> */}
			<div className="h-[300vh]"></div>
		</div>
	);
}
