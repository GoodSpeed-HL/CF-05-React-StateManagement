import {get,post} from "./restClient";

export const getProfile = () => {
    return get(process.env.REACT_APP_API_ENDPOINT + "/v1/users/me", true);
}


export const updateProfile = (profile) => {
    return post(process.env.REACT_APP_API_ENDPOINT + "/users/me", profile, true);
}
