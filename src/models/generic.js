import { thunk } from 'easy-peasy';
// import { message } from 'antd';

const generic = {

    request: thunk(async (actions, payload, helpers) => {
        
        let { requestService } = helpers.injections;

        let result;
        await requestService
            .makeRequest(payload.path, payload.body, payload.method)
            .then(response => result = response)
            .catch(e => result = e)

        return result;

    }),

}

export default generic;