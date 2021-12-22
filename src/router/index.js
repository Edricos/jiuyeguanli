import Vue from 'vue';
// import store from '../store';
import VueRouter from 'vue-router';
// import { Session } from '@/utils/storage';

// 解决 `element ui` 导航栏重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

// 安装 VueRouter 插件
Vue.use(VueRouter);

// 定义静态路由
const staticRoutes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/website/home/'),
        meta: {
            // title: '',
            requireAuth:false
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/website/login/'),
        meta: {
            title: '登录',
            requireAuth:false
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/website/register/'),
        meta: {
            title: '注册',
            requireAuth:false
        },
    },
    {
        path: '/enterprise',
        name: 'enterprise',
        component: () => import('@/views/enterprise/layout/'),
        meta: {
            title: '首页',
            requireAuth:true
        },
        children:[
            {
                path: '/enterprise/',
                name: 'home-enterprise',
                component: () => import('@/views/enterprise/home/'),
                meta: {
                    title: '首页',
                    requireAuth:true
                }
            },
            {
                path: '/enterprise/info',
                name: 'info-enterprise',
                component: () => import('@/views/enterprise/info/'),
                meta: {
                    title: '单位信息',
                    requireAuth:true
                },
            },
            {
                path: '/enterprise/recruit',
                name: 'recruit-enterprise',
                component: () => import('@/views/enterprise/recruit/'),
                meta: {
                    title: '招聘发布',
                    requireAuth:true
                }
            },
            {
                path: '/enterprise/history',
                name: 'history-enterprise',
                component: () => import('@/views/enterprise/history/'),
                meta: {
                    title: '招聘历史',
                    requireAuth:true
                }
            },
            {
                path: '/enterprise/resume',
                name: 'resume-enterprise',
                component: () => import('@/views/enterprise/resume/'),
                meta: {
                    title: '简历',
                    requireAuth:true
                }
            },
            {
                path: '/enterprise/resume/details',
                name: 'details-resume-enterprise',
                component: () => import('@/views/enterprise/resume/details'),
                meta: {
                    title: '简历',
                    requireAuth:true
                }
            },
            {
                path: '/enterprise/result',
                name: 'result-enterprise',
                component: () => import('@/views/enterprise/result/'),
                meta: {
                    title: '录取结果',
                    requireAuth:true
                }
            },

        ]
    },
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import('@/views/teacher/layout/'),
        meta: {
            title: '首页',
            requireAuth:true
        },
        children:[
            {
                path: '/teacher/',
                name: 'home-teacher',
                component: () => import('@/views/teacher/home/'),
                meta: {
                    title: '首页',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/enterprise',
                name: 'enterprise-teacher',
                component: () => import('@/views/teacher/enterprise/'),
                meta: {
                    title: '单位审核',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/enterprise/details',
                name: 'details-enterprise-teacher',
                component: () => import('@/views/teacher/enterprise/details'),
                meta: {
                    title: '单位信息',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/news',
                name: 'news-teacher',
                component: () => import('@/views/teacher/news/'),
                meta: {
                    title: '热点新闻',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/news/addNews',
                name: 'addNews-news-teacher',
                component: () => import('@/views/teacher/news/addNews'),
                meta: {
                    title: '热点新闻',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/news/details',
                name: 'details-news-teacher',
                component: () => import('@/views/teacher/news/details'),
                meta: {
                    title: '热点新闻',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/announcement',
                name: 'announcement-teacher',
                component: () => import('@/views/teacher/announcement/'),
                meta: {
                    title: '公告发布',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/announcement/add',
                name: 'add-announcement-teacher',
                component: () => import('@/views/teacher/announcement/addNews'),
                meta: {
                    title: '公告发布',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/announcement/details',
                name: 'details-announcement-teacher',
                component: () => import('@/views/teacher/announcement/details'),
                meta: {
                    title: '公告发布',
                    requireAuth:true
                },
            },
            {
                path: '/teacher/recruit',
                name: 'recruit-teacher',
                component: () => import('@/views/teacher/recruit/'),
                meta: {
                    title: '招聘发布',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/recruit/details',
                name: 'details-recruit-teacher',
                component: () => import('@/views/teacher/recruit/details'),
                meta: {
                    title: '招聘详情',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/preach',
                name: 'preach-teacher',
                component: () => import('@/views/teacher/preach/'),
                meta: {
                    title: '宣讲发布',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/jobFair',
                name: 'jobFair-teacher',
                component: () => import('@/views/teacher/jobFair/'),
                meta: {
                    title: '招聘会发布',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/sign',
                name: 'sign-teacher',
                component: () => import('@/views/teacher/sign/'),
                meta: {
                    title: '签约信息',
                    requireAuth:true
                }
            },
            {
                path: '/teacher/receipt',
                name: 'receipt-teacher',
                component: () => import('@/views/teacher/receipt/'),
                meta: {
                    title: '入校审批',
                    requireAuth:true
                }
            },
        ]
    },
    {
        path: '/student',
        name: 'student',
        component: () => import('@/views/student/layout/'),
        meta: {
            title: '首页',
            requireAuth:true
        },
        children: [
            {
                path: '/student/',
                name: 'home-student',
                component: () => import('@/views/student/home/'),
                meta: {
                    title: '首页',
                    requireAuth:true
                },
            },
            {
                path: '/student/info',
                name: 'info-student',
                component: () => import('@/views/student/info/'),
                meta: {
                    title: '个人信息',
                    requireAuth:true
                },
            },
            {
                path: '/student/history',
                name: 'history-student',
                component: () => import('@/views/student/history/'),
                meta: {
                    title: '预约记录',
                    requireAuth:true
                },
            },
            {
                path: '/student/announcement',
                name: 'announcement-student',
                component: () => import('@/views/student/announcement/'),
                meta: {
                    title: '通知公告',
                    requireAuth:true
                },
            },
            {
                path: '/student/announcement/details',
                name: 'details-announcement-student',
                component: () => import('@/views/student/announcement/details'),
                meta: {
                    title: '通知公告',
                    requireAuth:true
                },
            },
            {
                path: '/student/news',
                name: 'news-student',
                component: () => import('@/views/student/news/'),
                meta: {
                    title: '热点新闻',
                    requireAuth:true
                },
            },
            {
                path: '/student/news/details',
                name: 'details-news-student',
                component: () => import('@/views/student/news/details'),
                meta: {
                    title: '热点新闻',
                    requireAuth:true
                },
            },
            {
                path: '/student/preach',
                name: 'preach-student',
                component: () => import('@/views/student/preach/'),
                meta: {
                    title: '宣讲信息',
                    requireAuth:true
                },
            },
            {
                path: '/student/recruit',
                name: 'recruit-student',
                component: () => import('@/views/student/recruit/'),
                meta: {
                    title: '招聘信息',
                    requireAuth:true
                },
            },
            {
                path: '/student/recruit/details',
                name: 'details-recruit-student',
                component: () => import('@/views/student/recruit/details'),
                meta: {
                    title: '招聘信息',
                    requireAuth:true
                },
            },
        ]
    }



    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('../views/login'),
    //     meta: {
    //         title: '登录',
    //     },
    // },
    // {
    //     path: '/404',
    //     name: 'notFound',
    //     component: () => import('../views/error/404.vue'),
    //     meta: {
    //         title: '找不到此页面',
    //     },
    // },
    // {
    //     path: '/401',
    //     name: 'noPower',
    //     component: () => import('../views/error/401.vue'),
    //     meta: {
    //         title: '没有权限',
    //     },
    // },
];


// 加载静态路由
const createRouter = () =>
    new VueRouter({
        routes: staticRoutes,
        base: process.env.BASE_URL,
    });

// 创建路由
const router = createRouter();

// 导出路由
export default router;

