//公司用到的信息
import { Session } from '@/utils/storage.js'
const companyModule = {
    namespaced: true,
    state: {
        //当前用户信息
        userInfos: {},
        //当前用户发布的招聘信息
        massage:[],
        //收集到的简历信息
        resume:[],
        //录取结果
        result:[],
        //需要修改的id
        id:'',
        state:false


    },
    mutations: {
        // 设置用户信息
        getUserInfos(state, data) {
            state.userInfos = data;
        },
    },
    actions: {
        // 设置用户信息
        async setUserInfos({ commit }, data) {
            if (data) {
                commit('getUserInfos', data);
            } else {
                if (Session.get('userInfo')) commit('getUserInfos', Session.get('userInfo'));
            }
        },
    },
};

export default companyModule;
