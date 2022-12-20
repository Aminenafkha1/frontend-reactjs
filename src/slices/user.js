import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utilities/axios';

const initialState = {
  user: [],
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  let data;
  try {
  
    const token =localStorage.getItem('token')
    const response = await axios.get('/api/v1/me',{
      headers:{ Authorization: `Bearer ${token}`,
      
    },
    }
    
    
    );
    
    console.log(response)
    data = await response.data;
    if ((response.status = 200)) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    console.log(err);
    return Promise.reject(err.message ? err.message : data?.message);
  }
});


export const updateMe = createAsyncThunk('user/updateMe', async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  let data;

  try {
  
    const token =localStorage.getItem('token')
    const response = await axios.put('/api/v1/updateMe',{
      headers:{ Authorization: `Bearer ${token}`,
      
    },user
    }
    
    
    );
    
    console.log(response)
    data = await response.data;
    if ((response.status = 200)) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    console.log(err);
    // console.log(error.response.data);
    // return rejectWithValue(error.response.data);
    return Promise.reject(err.message ? err.message : data?.message);
  }
});

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload.data;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },

    [updateMe.pending]: (state) => {
      state.status = 'loading';
    },
    [updateMe.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload.data;
    },
    [updateMe.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },

  },
});

export const reducer = slice.reducer;

export default slice;
