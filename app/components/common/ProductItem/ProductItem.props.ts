import { IProduct } from "../../../interfaces";

export interface ProductItemProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	product: IProduct;
}
