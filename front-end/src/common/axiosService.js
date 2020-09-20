import axios from 'axios';

class AxiosService{
    constructor(){
        const instance = axios.create();
        instance.interceptors.request.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }
    handleSuccess(response){
        return response;
    }
    handleError(err){
        return Promise.reject(err);
    }
    get(url){
        return this.instance.get(url);
    }
}

export default new AxiosService();