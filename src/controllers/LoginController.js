import Axios from "axios";
const REACT_APP_API_URL = "http://localhost:3001"

export const userLogin = (email, password, callback, error) => {
    Axios({
        method: "POST",
        url: REACT_APP_API_URL + "/user/login",
        data: {
            email,
            password,
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }).then((response) => {
        if (response.status && response.status === 200) {
            callback && callback(response.data);
        }
    }).catch((err) => {
        error && error(err);
    });
};