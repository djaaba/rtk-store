import Image from "next/image";

import styles from "./ProductItem.module.css";
import { ProductItemProps } from "./ProductItem.props";

import useActions from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Button } from "../../UI";
import { IProduct } from "../../../interfaces";

export const ProductItem = ({ product }: ProductItemProps): JSX.Element => {
	const { addItem } = useActions();
	const { cart } = useTypedSelector((state: any) => state);

	const isExistsInCart = cart.some((i: IProduct) => i.id === product.id);

	return (
		<div className={styles.container}>
			<div className={styles.img}>
				<Image
					src={product.image}
					alt={product.title}
					width="100"
					height="143"
				/>
			</div>
			<div className={styles.text}>
				<p className={styles.title}>{product.title}</p>
				<p className={styles.price}>${product.price}</p>
			</div>
			<Button
				className={styles.btn}
				onClick={() => !isExistsInCart && addItem(product)}
			>
				{isExistsInCart ? "Already in cart" : "Add to cart"}
			</Button>
		</div>
	);
};
