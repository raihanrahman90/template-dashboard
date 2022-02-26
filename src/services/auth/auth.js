class authService{
    constructor(request){
        this.request = request;
    }
    login = async(username, password)=>{
        let result;
        await this.request
                .makeRequest('',{
                    username, password
                })
                .then(response=>{
                    result = {
                        error: null,
                        token : response.token,
                        user:{
                            username : response.data.username,
                            role:response.data.role
                        }
                    }
                })
                .catch(e=>{
                    result={
                        error:e
                    }
                });
        return result;
    }

    loginByToken = async()=>{
        let result;
        await this.request
                .makeRequest('',{})
                .then(response=>{
                    result={
                        error :null,
                        token:response.token,
                        user:{
                            username:response.data.username,
                            role:response.data.role
                        }
                    }
                })
                .catch(e=>{
                    result={
                        error:e
                    }
                })
        return result;
    }
}