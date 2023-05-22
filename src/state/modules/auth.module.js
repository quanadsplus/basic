

import AuthenticationService from "../../services/authentication.service";

const initialState = {
    jwt : ""
};

export default {
  namespaced: true,
  state: initialState,
  actions: {
    /**
     * Get config
     */
    async loginEmailPassword({commit},value){
        const result = await AuthenticationService.login(value.email,value.password)
        if (result.data.status == 'errors') {
            return false
        }
        if(result){
            commit('setJwt',result.token)
        }
        return true

    },
  },
  mutations: {
    setJwt(state,value){
        state.jwt = value
        localStorage.setItem("jwt",value)
    }
  },
};
