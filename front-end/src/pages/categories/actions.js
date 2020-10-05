// import { getApi } from "../../apis/index";
import { apiInterceptors, api } from "../../common/axiosService";
import * as constants from "./constants";

const getSubjectsSuccess = (data) => {
  return {
    type: constants.FETCH_SUBJECTS_SUCCESS,
    data,
  };
};

const getSubjectsFailed = (err) => {
  return {
    type: constants.FETCH_SUJBECTS_FAILED,
    err,
  };
};

export const getSubjectRequest = () => {
  return (dispatch) => {
    // getApi("subjects")
    //   .then((res) => {
    //     dispatch(getSubjectsSuccess(res));
    //   })
    //   .catch((err) => {
    //     dispatch(getSubjectsFailed(err));
    //   });
    api("GET", "subjects", null)
      .then((res) => {
        dispatch(getSubjectsSuccess(res));
      })
      .catch((err) => {
        dispatch(getSubjectsFailed(err));
      });
  };
};

export const updateCart = (code, id) => {
  return {
    type: constants.UPDATE_CART,
    subject: {
      code,
      id,
    },
  };
};
