import axios from "axios";

const SIGN_UP_URL = "http://localhost:8081/api/v1/signup"
const LOGIN = "http://localhost:8081/login"

class AuthService{

    createUser(user){
        return axios
                .post(SIGN_UP_URL, user);
    }

    loginUser(user){
        return axios
                .post(LOGIN, user)
                .then( res =>{
                    if(res.data.access_token){
                        localStorage.setItem("user", JSON.stringify(res.data));
                    }

                    return res.data;
                });
    }

}

export default new AuthService();