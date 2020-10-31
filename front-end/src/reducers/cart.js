import * as constants from '../pages/categories/constants';
import * as toast from '../common/toast';

var initState = [];

var cartReducer = (state = initState, action) => {

    switch (action.type) {

        case constants.UPDATE_CART:
            var { id, code, nmh, name, crt, pg, stt } = action.payload;
            var check = false;
            if (state.length > 0) {
                state.forEach((item, index) => {
                    if (item.code === code) {
                        check = true;
                        if (item.nmh === nmh && parseInt(item.pg) === parseInt(pg)) {
                            state.splice(index, 1);
                            //toast
                            toast.errNotify('Subject deleted');
                        }
                        else {
                            state[index] = { ...state[index], id, nmh, pg }
                            //toast
                            // toast.warningNotify('Subject updated');
                        }
                    }
                })
            }
            if (check === false) {
                state.push({ id, code, nmh, name, crt, pg, stt });
                //toast
                // toast.successNotify('Subject added');
            }
            return [...state];

        case constants.DELETE_ALL_FROM_CART:
            // toast.errNotify("All deleted");
            return [];

        default:
            return [...state];
    }
}

export default cartReducer;