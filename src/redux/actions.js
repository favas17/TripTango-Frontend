import axiosInstance from "../instatnce/axiosInstance";

export const FETCH_PACKAGE_DETAILS_REQUEST = 'FETCH_PACKAGE_DETAILS_REQUEST';
export const FETCH_PACKAGE_DETAILS_SUCCESS = 'FETCH_PACKAGE_DETAILS_SUCCESS';
export const FETCH_PACKAGE_DETAILS_FAILURE  = 'FETCH_PACKAGE_DETAILS_FAILURE';

export const fetchPackageDetailsRequest = ()=>({
    type: FETCH_PACKAGE_DETAILS_REQUEST
});

export const fetchPackageDetailsSuccess = ()=>({
    type:FETCH_PACKAGE_DETAILS_SUCCESS,
    payload: packageDetails
});

export const fetchPackageDetailsFailure = ()=>({
    type:FETCH_PACKAGE_DETAILS_FAILURE,
    payload:error
});


export const fetchPackageDetails = ()=>{
    return async dispatch =>{
        dispatch(fetchPackageDetailsRequest());
        try{
            const response = await axiosInstance.get('packages');
            const data = await response.json();
            dispatch(fetchPackageDetailsSuccess(data));
        }
        catch(error){
            dispatch(fetchPackageDetailsFailure(error.message))
        }
    }
}