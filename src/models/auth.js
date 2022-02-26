import { thunk, action, persist } from 'easy-peasy';

const auth = {

    init: thunk(async (actions, payload, helpers) => {

        let { data } = helpers.getState();
        let { request } = helpers.getStoreActions().generic;
        if (data.token) {
            let response = await request({path: "/auth/login-by-token"});
            if (!response.error) {
                actions.setLogin({
                    remember: true,
                    token: response.token,
                    user: {
                        email: response.data.email,
                        role : (response.data.role === 1 ? "admin" : response.data.role === 2 ? "super-admin" : "unknown"),
                        adminId: response.data.adminId,
                        typeRole: response.data.typeRole
                    }
                })
            } else {
                let { genericService } = helpers.injections;
                genericService.message.info("Failed to restore session. Please Login Again");
                actions.setLogout();
            }
        }
    }),

    setLogin: action(async (state, payload, helpers) => {
        state.user.email = payload.user.email;
        state.user.role = payload.user.role;
        state.user.adminId = payload.user.adminId;
        state.user.typeRole = payload.user.typeRole;
        if (payload.remember) state.data.token = payload.token;
        state.isAuthenticated = true;
    }),

    setLogout: action(async (state, payload, helpers) => {
        state.user.email = null;
        state.user.adminId = null;
        state.user.role = null;
        state.user.typeRole = null;
        state.data.token = null;
        state.isAuthenticated = false;
    }),

    isAuthenticated: false,
    user: {
        adminId: null,
        email: null,
        role: null,
        typeRole: null,
    },

    data: persist({
        token: null
    })

}

export default auth;