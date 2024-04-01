import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-white flex justify-between items-center max-w-full px-4 py-5 relative z-30 text-black">
			<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />

			<ul className="hidden lg:flex gap-12 items-center h-full">
				{NAV_LINKS.map((link) => (
					<li
						key={link.key}
						className="regular-16 text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold">
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div className="hidden lg:flex items-center text-white hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					color="btn_dark_green"
				/>
			</div>
			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden"
			/>
		</nav>
	);
};

export default Navbar;
