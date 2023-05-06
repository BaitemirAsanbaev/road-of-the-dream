import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({ username, password, email }) => {
  const response = await axios.post('http://192.168.0.64:8000/login/', { username, password, email });
  const token = response.data.token;
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  return {username, email, token};
});

export const signup = createAsyncThunk('auth/signup', async ({ username, password, email }) => {
  const response = await axios.post('http://192.168.0.64:8000/signup/', { username, password, email });
  const token = response.data.token;
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  return {username, email, token};

});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('jwtToken') || null,
    username: localStorage.getItem("username") || null,
    email: localStorage.getItem("email") || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('jwtToken');
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
