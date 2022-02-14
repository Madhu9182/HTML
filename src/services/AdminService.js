import axios from 'axios'

const REGISTRATION_API_BASE_URL = "http://localhost:5508/api/registrationform";
class AdminService {

    getRegistration(){
        return axios.get(REGISTRATION_API_BASE_URL);
    }

    createRegistration(register){
        return axios.post(REGISTRATION_API_BASE_URL, register);
    }

    getRegistrationById(userId){
        return axios.get(REGISTRATION_API_BASE_URL + '/' + userId);
    }

    updateRegistration(register, userId){
        return axios.put(REGISTRATION_API_BASE_URL + '/' + userId, register);
    }

    deleteRegistration(userId){
        return axios.delete(REGISTRATION_API_BASE_URL + '/' + userId);
    }

    loginRegistration(register){
        return axios.post(REGISTRATION_API_BASE_URL, register);
    }
}
export default new AdminService();