import AxiosService from '../common/axiosService';
import { API_ENDPOINT } from '../constants';

export const getApi = (url)=>{
    return AxiosService.get(`${API_ENDPOINT}/${url}`);
}