import * as subConstants from '../constants/subjects';

var initState = [];

var subjectReducer = (state = initState, action)=>{
    switch(action.type){

        case subConstants.FETCH_SUBJECTS_SUCCESS:
            return action.data.data;
        
        case subConstants.FETCH_SUJBECTS_FAILED:
            return [...state];

        default:
            return [...state];
    }
}

export default subjectReducer;