import Image from "next/image";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: string;
	color: string;
};

const Button = ({ type, title, icon, color }: ButtonProps) => {
	return (
		<button
			className={`items-center flex gap-3 rounded-full border justify-center ${color} `}
			type={type}>
			{icon && (
				<Image src={icon} alt={title} width={24} height={24} layout="fixed" />
			)}
			<span className="bold-16 whitespace-nowrap font-bold text-xs">
				{title}
			</span>
		</button>
	);
};

export default Button;
