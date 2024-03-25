import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Role from "src/models/enums/role";

interface AuthState {
  userRole: Role.Admin | null;
}

const initialState: AuthState = {
  userRole: null, // Set initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<Role.Admin | null>) => {
      state.userRole = action.payload;
    },
  },
});

export const { setUserRole } = authSlice.actions;

export default authSlice.reducer;
