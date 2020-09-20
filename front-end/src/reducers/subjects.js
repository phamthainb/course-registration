import * as constants from '../pages/categories/constants';

var initState = [];

var subjectReducer = (state = initState, action)=>{
    switch(action.type){

        case constants.FETCH_SUBJECTS_SUCCESS:
            return action.data.data;
        
        case constants.FETCH_SUJBECTS_FAILED:
            return [...state];

        default:
            return [...state];
    }
}

export default subjectReducer;