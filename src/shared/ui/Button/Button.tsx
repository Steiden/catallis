import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonVariants = "solid" | "flat";

export const ButtonDefaultStyle = styles["button"];

export const ButtonStyles: Record<ButtonVariants, string> = {
	solid: styles["button--solid"],
	flat: styles["button--flat"],
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
