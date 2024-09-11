import HorizontalScroll from "./HorizontalScroll";

const CarouselSection = () => {
	return (
		<section>
			<div>
				<h3 className="text-[23px] text-center font-semibold mb-4">
					Experience
				</h3>
				<h2 className="text-[80px] text-center font-semibold tracking-[-0.2rem] leading-tight">
					Channeling the best of TV. <br /> And the best of Apple.
				</h2>
				<p className="text-[#86868b] text-[23px] text-center tracking-[-0.rem] font-semibold max-w-3xl mx-auto">
					Discover award-winning Apple Originals series and films — with other
					favorites on Disney+, Prime Video, Netflix, Max, ESPN,3 and more.
					Experience world‑class workouts, superfun games, and exciting ways to
					enjoy hit music you’ll find only from Apple. And explore thousands of
					other top apps in the App Store. There’s more on Apple TV 4K than just
					TV.
				</p>
				<HorizontalScroll endValue="-120%" />
				<HorizontalScroll endValue="-200%" />
				<HorizontalScroll endValue="-100%" />
			</div>
		</section>
	);
};

export default CarouselSection;
