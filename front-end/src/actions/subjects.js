import { getApi } from "../apis";
import * as subConstants from "../constants/subjects";

const getSubjectsSuccess = (data) => {
  return {
    type: subConstants.FETCH_SUBJECTS_SUCCESS,
    data,
  };
};

const getSubjectsFailed = (err) => {
  return {
    type: subConstants.FETCH_SUJBECTS_FAILED,
    err,
  };
};

export const getSubjectRequest = () => {
  return (dispatch) => {
    getApi("subjects")
      .then((res) => {
        dispatch(getSubjectsSuccess(res));
      })
      .catch((err) => {
        dispatch(getSubjectsFailed(err));
      });
  };
};
