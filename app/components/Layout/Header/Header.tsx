import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

import { CartDropdown } from "../../common/";
import { Title } from "../../UI";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<>
			<div className={styles.header}>
				<Title tag="h1">Let&apos;s find your products!</Title>
				<CartDropdown />
			</div>
		</>
	);
};
