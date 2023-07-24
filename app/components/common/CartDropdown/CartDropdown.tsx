import Image from "next/image";
import Link from "next/link";
import { BsCart, BsTrash, BsX } from "react-icons/bs";
import cn from "classnames";

import styles from "./CartDropdown.module.css";
import { CartDropdownProps } from "./CartDropdown.props";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import useActions from "../../../hooks/useActions";
import { useOutside } from "../../../hooks/useOutside";
import { Button } from "../../UI";

export const CartDropdown = ({ ...props }: CartDropdownProps): JSX.Element => {
	const { ref, isShow, setIsShow } = useOutside(false);
	const { cart } = useTypedSelector((state) => state);
	const { removeItem } = useActions();

	return (
		<>
			<Button
				rounded
				className={styles.btn}
				onClick={() => setIsShow(!isShow)}
			>
				{isShow ? <BsX /> : <BsCart />}
			</Button>

			{isShow && (
				<div className={cn(styles.container, "anim-cart")} ref={ref}>
					{cart.length ? (
						<>
							{cart.map((product) => (
								<div
									key={`Cart item: ${product.id}`}
									className={styles.content}
								>
									<div className={styles.wrapper}>
										<Image
											src={product.image}
											alt={product.title}
											width="33"
											height="48"
											layout="fixed"
											className={styles.img}
										/>
										<div className={styles.text}>
											<p>{product.title}</p>
											<p>${product.price}</p>
										</div>
									</div>
									<Button
										className={styles.btn}
										onClick={() =>
											removeItem({ id: product.id })
										}
									>
										<BsTrash />
									</Button>
								</div>
							))}
							<Link href="checkout">
								<a>Place order</a>
							</Link>
						</>
					) : (
						<div>Cart is empty</div>
					)}
				</div>
			)}
		</>
	);
};
