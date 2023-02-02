import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "./dataAPI";

export const asyncPostsFetch = createAsyncThunk(
    'USERS/getPosts',
    fetchData
)

const postsSlice = createSlice({
    name:'POSTS',
    initialState:[],
    reducers: {

    },
    extraReducers: (invent) =>{
        invent
        .addCase(asyncPostsFetch.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export default postsSlice.reducer