import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "./dataAPI";

export const asyncUsersFetch = createAsyncThunk(
    'USERS/getUsers',
    fetchData
)

const usersSlice = createSlice({
    name:'USERS',
    initialState:[],
    reducers: {

    },
    extraReducers: (invent) =>{
        invent
        .addCase(asyncUsersFetch.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export default usersSlice.reducer