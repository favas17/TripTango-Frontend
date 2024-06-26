import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../instatnce/axiosInstance";

// async thunk for fetching  package details
export const fetchPackageDetails = createAsyncThunk(
    'packages/fetchPackageDetails',  //action type prefix
    async ()=>{
        const response = await axiosInstance.get('/packages');
        return response.data
    }
);

export const fetchPackageById = createAsyncThunk(
    'packages/fetchPackageById',
    async (packageId)=> {
        const response = await axiosInstance.get(`/packages/${packageId}`)
        return response.data
    }
)

// slice for fetching packages
const packageSlice = createSlice({
    name:'packages', //name of the slice
    initialState:{
        packageDetails:[],
        selectedPackage: null,
        loading:false,
        error:null
    },
    reducers:{},  //syncchronous action can be defined here
    // extra reducer user to define createthunk action or asynchronous actions
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPackageDetails.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPackageDetails.fulfilled, (state,action)=>{
            state.loading = false;
            state.packageDetails = action.payload //payload from fulfilled action
        })
        .addCase(fetchPackageDetails.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(fetchPackageById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPackageById.fulfilled, (state,action)=>{
            state.loading = false;
            state.selectedPackage = action.payload
        })
        .addCase(fetchPackageById.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default packageSlice.reducer;