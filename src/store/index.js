import Vue from 'vue';
import Vuex from 'vuex';
import userInfos from './modules/userInfos'
import company from "./modules/company";

Vue.use(Vuex);


export default new Vuex.Store({
    modules :{
        userInfos,
        company
    }
});
