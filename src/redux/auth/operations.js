import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// const setAuthHeader = token => {
    //     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // };
    
    // const clearAuthHeader = () => {
        //     axios.defaults.headers.common.Authorization = '';
        // };

    export const instance = axios.create({
          baseURL: 'https://connections-api.herokuapp.com/',
        });
        
    export const token = {
    set: token => {
        instance.defaults.headers['Authorization'] = token;
    },
    clear: () => {
        instance.defaults.headers['Authorization'] = '';
    },
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const response = await instance.post('/users/signup', credentials);
        // setAuthHeader(response.data.token);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const response = await instance.post('users/login', credentials);
        // setAuthHeader(response.data.token);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
    try {
        await instance.post('users/logout');
        token.clear();
        return;
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
        token.set(persistedToken);
        const respone = await instance.get('users/current');
        return respone.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});