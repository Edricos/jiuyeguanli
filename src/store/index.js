// import Vue from 'vue';
// import Vuex from 'vuex';
// import userInfos from './modules/userInfos'
// import company from "./modules/company";
//
// Vue.use(Vuex);
//
//
// export default new Vuex.Store({
//     modules :{
//         userInfos,
//         company
//     }
// });
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        // 存储token
        Authorization:'',
        AuthorizationStudent: localStorage.getItem('AuthorizationStudent') ? localStorage.getItem('AuthorizationStudent') : '',
        AuthorizationTeacher: localStorage.getItem('AuthorizationTeacher') ? localStorage.getItem('AuthorizationTeacher') : '',
        AuthorizationEnterprise: localStorage.getItem('AuthorizationEnterprise') ? localStorage.getItem('AuthorizationEnterprise') : '',
        studentCurrent: {
            path:'',
            label:'',
        },
        teacherCurrent:  {
            path:'',
            label:'',
        },
        enterpriseCurrent: {
            path:'',
            label:'',
        },
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLoginStudent (state, user) {
            state.AuthorizationStudent = user.AuthorizationStudent;
            localStorage.setItem('AuthorizationStudent', user.AuthorizationStudent);
        },
        changeLoginTeacher (state, user) {
            state.AuthorizationTeacher = user.AuthorizationTeacher;
            localStorage.setItem('AuthorizationTeacher', user.AuthorizationTeacher);
        },
        changeLoginEnterprise (state, user) {
            state.AuthorizationEnterprise = user.AuthorizationEnterprise;
            localStorage.setItem('AuthorizationEnterprise', user.AuthorizationEnterprise);
        }

    }
});

export default store;
