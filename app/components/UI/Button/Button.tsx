import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
	children,
	className,
	rounded,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<>
			<button
				className={cn(
					rounded ? styles.round : styles.square,
					className
				)}
				{...props}
			>
				{children}
			</button>
		</>
	);
};
