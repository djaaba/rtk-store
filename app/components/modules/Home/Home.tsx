import styles from "./Home.module.css";
import { HomeProps } from "./Home.props";

import { useGetProductsQuery } from "../../../store/product/product.api";
import { ProductItem } from "../../common/";
import { Header } from "../../Layout";
import { IProduct } from "../../../interfaces";

export const Home = ({ ...props }: HomeProps): JSX.Element => {
	const { data, isLoading, error } = useGetProductsQuery(6);

	return (
		<>
			<Header />
			{isLoading ? (
				"Loading..."
			) : error ? (
				<p className={styles.error}>{error}</p>
			) : (
				<div className={styles.container}>
					{data?.map((product: IProduct) => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			)}
		</>
	);
};
