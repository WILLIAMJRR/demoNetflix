import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	userEmail: "",
	userPassword: "",
};
const User = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserEmail: (state, action) => {
			state.userEmail = action.payload.userEmail;
		},
		setUserPassword: (state, action) => {
			state.userPassword = action.payload.userPassword;
		},
	},
});

export const { setUserPassword, setUserEmail } = User.actions;

export const selectUserEmail = (state) => state.user.userEmail;

export const selectUserPassword = (state) => state.user.userPassword;

export default User.reducer;
