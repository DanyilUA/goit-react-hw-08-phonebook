import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
    try {
        await axios.post('users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
        setAuthHeader(persistedToken);
        const respone = await axios.get('users/current');
        return respone.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});