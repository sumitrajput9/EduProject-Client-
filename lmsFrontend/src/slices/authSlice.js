import { createSlice } from "@reduxjs/toolkit";

// Helper to safely parse token
const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return JSON.parse(token);
  } catch (e) {
    return token;
  }
};

const initialState = {
  signupData: null,
  loading: false,
  token: getTokenFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
