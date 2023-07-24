export interface ButtonProps
	extends Omit<
		React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>,
		"onDragStart" | "onDragEnd" | "onDrag" | "ref"
	> {
	children: React.ReactNode;
	rounded?: boolean;
}
