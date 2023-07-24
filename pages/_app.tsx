import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css";

import { store } from "../app/store/store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}

export default MyApp;
