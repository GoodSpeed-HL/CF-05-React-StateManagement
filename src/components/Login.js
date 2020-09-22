import React, {Component} from 'react';
import {login} from "../service/auth";
import {getProfile} from "../service/profile";

class Login extends Component {

    login = async () => {
        try{
            console.log("tester", "123123")

        }
        catch (err){
            console.error(err)
        }
    }

    async componentDidMount() {
        try{
            const loginResponse = await login("tester", "123123");
            console.log(loginResponse.result)
            localStorage.setItem("token", loginResponse.result)
            //try invalid token and it will go to catch block
            //localStorage.setItem("token", loginResponse.result)
            const response = await getProfile();
            console.log(response);
        }
        catch (error){
            console.error(error);
        }
    }



    getProfile = async () =>{

    }

    render() {
        return (
            <div>
                Please Login first
            </div>
        );
    }
}

export default Login;