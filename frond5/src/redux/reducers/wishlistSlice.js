import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlistsThunk = createAsyncThunk('/wihs/get', async () => {
    const res = await axios.get("http://localhost:5000/wish")
    return res.data
})

export const postWishlistThunk = createAsyncThunk('/wish/post', async (data) => {
    await axios.post("http://localhost:5000/wish", data)
    return data
})

export const deleteWishlistThunk = createAsyncThunk('/wish/delete', async (id) => {
    await axios.delete(`http://localhost:5000/wish/${id}`, id)
    return id
})

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getWishlistsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getWishlistsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wishlist = action.payload
        })
        .addCase(getWishlistsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(postWishlistThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wishlist.push(action.payload)
        })
        .addCase(deleteWishlistThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wishlist =  state.wishlist.filter(item => item._id !== action.payload)
        })
    }
})

export default wishlistSlice.reducer