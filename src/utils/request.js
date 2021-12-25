// import axios from 'axios'
// const service = axios.create({
//     baseURL: process.env.VUE_APP_BASE_API,
//     timeout: 5000 // request timeout
// })
// // service.interceptors.request.use(
// //     req => {
// //         if (localStorage.getItem("token")) {
// //             req.headers['token'] = localStorage.getItem("token")
// //         }
// //         return req
// //     }
// // )
//
//
//
// export default service

/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
axios.defaults.withCredentials = true
import { Toast } from 'vant';
import router from "../router";
import store from '../store/index'
import { Message } from 'element-ui' //ui提示框架

function Messages(){
    Message({
        showClose: true,
        message: '请登入',
        type: 'error',
        duration: 1000 })
}

function MessagesOver(){
    Message({
        showClose: true,
        message: '登录已过期，请重新登入！',
        type: 'warning',
        duration: 1000 })
}

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
axios.defaults.baseURL = 'http://localhost:8091';

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//前置路由守卫 可判断token
router.beforeEach((to, from, next) => {

    //如果不需要登入即可访问
    if (to.meta.requireAuth==false) {
        next();
    } else {
        //截取路径
        let mainPath=to.path.split('/')
        //访问学生端
        if(mainPath[1]=='student'){
            let token = localStorage.getItem('AuthorizationStudent');
            if (token === null || token === '') {
                // //提示登入
                // Messages()
                router.push({
                    name: 'login',
                    params: { redirect: to.path }
                });
            } else {
                store.state.Authorization = token
                next();
            }
        }else if(mainPath[1]=='teacher') {
            let token = localStorage.getItem('AuthorizationTeacher');
            if (token === null || token === '') {
                // //提示登入
                // Messages()
                router.push({
                    name: 'login',
                    params: { redirect: to.path }
                });
            } else {
                store.state.Authorization = token
                next();
            }
        }else{
            let token = localStorage.getItem('AuthorizationEnterprise');
            if (token === null || token === '') {
                // //提示登入
                // Messages()
                router.push({
                    name: 'login',
                    params: { redirect: to.path }
                });
            } else {
                store.state.Authorization = token
                next();
            }
        }
    }
});

// 请求拦截器(添加token)
axios.interceptors.request.use(

    config => {
        if (store.state.Authorization) {
            //通过头部传递token
            // config.headers.common['token'] =store.state.Authorization
            // store.state.Authorization=''

            //用cookie实现token传递
            let token = store.state.Authorization;
            document.cookie="token="+token;
            store.state.Authorization='';
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status==401) {
            router.push({
                name: 'login',
                params: { redirect: router.currentRoute.fullPath }
            });
            //提示重新登录
            MessagesOver()
            // switch (error.response.status) {
            //     // 401: 未登录或token过期
            //     // 未登录则跳转登录页面，并携带当前页面的路径
            //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
            //     case 401:
            //         router.replace({
            //             path: '/login',
            //             query: { redirect: router.currentRoute.fullPath }
            //         });
            //         break;
            //     // 403 token过期
            //     // 登录过期对用户进行提示
            //     // 清除本地token和清空vuex中token对象
            //     // 跳转登录页面
            //     case 403:
            //         // 清除token
            //         localStorage.removeItem('token');
            //         store.commit('loginSuccess', null);
            //         // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            //         setTimeout(() => {
            //             router.replace({
            //                 path: '/login',
            //                 query: {
            //                     redirect: router.currentRoute.fullPath
            //                 }
            //             });
            //         }, 1000);
            //         break;
            //     // 404请求不存在
            //     case 404:
            //         Toast({
            //             message: '网络请求不存在',
            //             duration: 1500,
            //             forbidClick: true
            //         });
            //         break;
            //     // 其他错误，直接抛出错误提示
            //     default:
            //         Toast({
            //             message: error.response.data.message,
            //             duration: 1500,
            //             forbidClick: true
            //         });
            // }
            return Promise.reject(error.response);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
                console.log(err)
            })
    });
}