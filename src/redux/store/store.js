import { configureStore } from "@reduxjs/toolkit";
import user from "./User.slice";

export default configureStore({
	reducer: {
		user,
	},
});
