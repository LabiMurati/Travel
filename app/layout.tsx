import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Home from "./page";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";


export const metadata: Metadata = {
	title: "Travel Landing Page",
	description: "Travel UI/UX App for camping",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="max-container  padding-container">
					<Navbar />
					<Home />
				</div>

				<GetApp />
				<Footer />
			</body>
		</html>
	);
}
