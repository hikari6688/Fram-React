import { Login } from 'app/Login/router';
import { Main } from 'app/Main/router';

export const asyncRoutes = [
         {
           name: 'App',
           component: App,
           path: '/',
           exact: true,
           private: false,
           redirect:'/system',
           children: [
             {
               title: '系统设置',
               path: '/system',
               name: 'system',
               component: 'System',
             },
             {
               title: '班级管理',
               path: '/class',
               name: 'class',
               component: 'Class',
             },
           ],
         },
       ];
