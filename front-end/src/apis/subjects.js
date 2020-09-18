import AxiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constants';

const url = "subjects";

export const getSubjects = ()=>{
    return AxiosService.get(`${API_ENDPOINT}/${url}`);
}