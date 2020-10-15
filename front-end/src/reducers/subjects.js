import * as constants from '../pages/categories/constants';
import * as toast from '../common/toast';

var initState = [];

var subjectReducer = (state = initState, action)=>{
    switch(action.type){
        case constants.FETCH_SUBJECTS_SUCCESS:
            return action.data.data;
        
        case constants.FETCH_SUJBECTS_FAILED:
            toast.errNotify(action.err.message);
            return [];

        default:
            return [...state];
    }
}

export default subjectReducer;