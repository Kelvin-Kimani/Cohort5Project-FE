import axios from "axios";
import authHeader from "./authHeader"

const API_URL = "http://localhost:8081/api/v1/"

class UserService{

    getUsers(){
        return axios.get(API_URL + "users" , { headers : authHeader() });
    }
    getUserByEmail(emailAddress){
        return axios.get(API_URL + "currentUser/" + emailAddress, { headers : authHeader() });
    }

    getUserById(userId){
        return axios.get(API_URL + "user/" + userId, { headers : authHeader() });
    }

    createOrganization(organization){
        return axios.post(API_URL + "create/organization", organization, { headers : authHeader() });
    }

}

export default new UserService()