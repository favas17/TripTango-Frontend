import { FETCH_PACKAGE_DETAILS_REQUEST,
    FETCH_PACKAGE_DETAILS_SUCCESS,
FETCH_PACKAGE_DETAILS_FAILURE } from "./actions";

const initialState = {
    packageDetails : [],
    loading:false,
    error:null
};

const reducer = (state = initialState,action) => {
    switch (action.type){
        case FETCH_PACKAGE_DETAILS_REQUEST:
            return {...state,loading:true,error:null};
        
        case FETCH_PACKAGE_DETAILS_SUCCESS:
            return {...state,loading:false,packageDetails: action.payload,error:null };

        case FETCH_PACKAGE_DETAILS_FAILURE:
            return {...state,loading:false, error:action.payload};

        default:
            return state;
    }
}

export default reducer;