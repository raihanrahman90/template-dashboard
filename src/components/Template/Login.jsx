import React from 'react';

import { Redirect } from "react-router-dom";
import { useStoreActions, useStoreState}  from "easy-peasy";
import LoginView from './LoginView';

const LoginContainer = ({from, location})=>{
    let isAuthenticated = useStoreState(store=>store.auth.isAuthenticaated);
    let request = useStoreActions(action=>action.generic.request);
    let setLogin = useStoreActions(action=>action.auth.setLogin);

    const onSubmit = async(payload)=>{
        let response = await request({
            path: "/auth/login",
            body: {username: payload.username, password:payload.password}
        });

        if(response.error){
            return response.error
        }else{
            setLogin({
                remember: payload.remember,
                token: response.token,
                user:{
                    username:response.data.username,
                    role: response.data.role,
                    adminId: response.data.adminId
                }
            })
        }
    }
    if(!isAuthenticated){
        return(
            <LoginView onSubmit={onSubmit}/>
        );
    }else{
        return(
            <Redirect
                to={{
                    pathname: from ? from.pathname:"/admin",
                    state: {from:location}
                }}
            />
        )
    }
}
export default LoginContainer;