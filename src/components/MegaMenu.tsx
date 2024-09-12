import { motion } from "framer-motion";

const MegaMenu = ({ product, setShowMegaMenu, setSubMenu }: any) => {
	return (
		<div
			className="w-full"
			// id="mega-menu"
			// className="absolute z-30 top-14 left-0 w-screen min-h-screen"
		>
			{/* Backdrop area */}
			{/* <div
				className="absolute inset-0 bg-white/20 backdrop-blur-sm"
				onMouseEnter={() => {
					setShowMegaMenu(false);
					setSubMenu(null);
				}}
			></div> */}

			{/* Content area */}
			<div className="relative grid grid-cols-5 gap-5 px-40 py-10 bg-white">
				{product?.map((item: any, i: number) => (
					<div key={i} className="font-semibold space-y-5">
						<h1 className="hover:opacity-50">{item.title}</h1>
						<div className="space-y-3">
							{item.items.map((subItem: any, j: number) => (
								<p
									key={j}
									className={`${
										i === 0 ? "text-[20px] text-black" : "text-sm opacity-70"
									} hover:opacity-100 `}
								>
									{subItem}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MegaMenu;
