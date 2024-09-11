"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const [subMenu, setSubMenu] = useState<null | any>(["Test", "Test"]);

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
										{navlink.product && showMegaMenu && (
											<AnimatePresence>
												<MegaMenu
													product={subMenu}
													setShowMegaMenu={setShowMegaMenu}
													setSubMenu={setSubMenu}
												/>
											</AnimatePresence>
										)}
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
