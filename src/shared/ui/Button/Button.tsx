import { FC, HTMLAttributes } from "react";

export type ButtonVariants = "solid" | "flat";

export const ButtonDefaultStyle = "cursor-pointer flex items-center justify-center w-fit rounded-[16px] border-[2px] text-white text-[18px] font-semibold h-[60px] px-12 py-4";

export const ButtonStyles: Record<ButtonVariants, string> = {
	solid: "border-transparent bg-[#FF001D]",
	flat: "border-[#464747]",
};

type Props = HTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariants;
};

export const Button: FC<Props> = ({ variant = "solid", className, children, ...rest }) => {
	return (
		<button className={`${ButtonDefaultStyle} ${ButtonStyles[variant]} ${className}`} {...rest}>
			{children}
		</button>
	);
};
