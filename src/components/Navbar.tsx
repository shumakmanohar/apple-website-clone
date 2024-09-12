"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const [subMenu, setSubMenu] = useState<null | any>(["Test", "Test"]);

	const dropInVariants = {
		initial: {
			y: 0, // Start slightly above
			opacity: 0,
		},
		animate: {
			y: 0, // Drop down to normal position
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			y: "-10%", // Drop up to hide
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		},
	};

	return (
		<>
			{/* NavMenu with Links */}
			<div className="bg-white min-h-11">
				<div className="max-w-7xl mx-auto py-3  flex">
					<BsApple size={18} className="opacity-70" />
					<nav className="w-full">
						<ul className="flex  items-center w-full justify-evenly">
							{NAV_LINKS.map((navlink) => {
								return (
									<>
										<li key={navlink.category}>
											<Link
												href={"#"}
												className="text-xs text-black/70 "
												onMouseEnter={(e) => {
													setSubMenu(navlink.product);
													setShowMegaMenu(true);
												}}
											>
												{navlink.category}
											</Link>
										</li>
										<AnimatePresence>
											{navlink.product && showMegaMenu && (
												<motion.div className="w-screen h-screen absolute top-14 z-30 right-0">
													{/* Back drop Blur */}
													<motion.div
														onMouseEnter={() => {
															setShowMegaMenu(false);
															setSubMenu(null);
														}}
														exit={{ opacity: 0 }}
														className=" bg-white/10 backdrop-blur-[2px] h-full w-full absolute"
													></motion.div>
													<MegaMenu
														product={subMenu}
														setShowMegaMenu={setShowMegaMenu}
														setSubMenu={setSubMenu}
													/>
												</motion.div>
											)}
										</AnimatePresence>
									</>
								);
							})}
							{/* Search Icon */}
							<BsBag size={18} className="opacity-70" />
							<GoSearch size={18} className="opacity-70" />
						</ul>
					</nav>
				</div>
			</div>
			{/* Section Menu */}
			<div className=" bg-white min-h-11 sticky top-0 z-20">
				<div className="max-w-7xl mx-auto py-3 mb-1 flex items-center justify-between">
					<h3 className="text-xl font-semibold ">Apple TV 4K</h3>
					<div>
						<button className="text-xs bg-[#0071e3] px-3 py-1 text-white rounded-full">
							Buy
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
