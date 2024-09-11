"use client";

import CarouselSection from "@/components/CarouselSection";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import Navbar from "@/components/Navbar";
import ScrollingSection from "@/components/ScrollSection";
import StickyScroll from "@/components/StickyScroll";
import HeroSection from "@/components/Test6";
import TestHero from "@/components/TestHero";
import TestHero2 from "@/components/TestHero2";
import TestHero3 from "@/components/TestHero3";
import TestHero4 from "@/components/TestHero4";
import TestHero5 from "@/components/TestHero5";
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
			{/* <ScrollingSection /> */}
			<p>Drop in Test</p>
			{/* <TestHero5 /> */}
			{/* <HeroSection /> */}
			{/* <TestHero7 /> */}
			<div className="h-[300vh]"></div>
		</div>
	);
}
