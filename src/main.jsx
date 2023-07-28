import React from "react";
import ReactDOM from "react-dom/client";
import "./config/routers/index.css";

import { router } from "./config/routers";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Toaster
				position='top center'
				reverseOrder={false}
			/>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
