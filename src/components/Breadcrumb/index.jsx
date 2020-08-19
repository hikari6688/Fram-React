import { Breadcrumb } from 'antd';
import React from 'react';
import {observer } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import { asyncRoutes } from '../../store/router.store.js'

export const Crumb = observer(() => {
  const location=useLocation();
  const path=location.pathname;//当前页面的地址
  const routes=asyncRoutes.routes;//存储的路由表

  const res= [
    {
      title: '系统设置',
      path: '/system',
      name: 'system',
      exact: false,
      icon: 'TwitterOutlined',
      children: [{ title: '应用管理', path: '/system/app', name: 'app', icon: 'GitlabOutlined', component: 'App' }],
    },
    {
      title: '权限管理',
      path: '/auth',
      name: 'auth',
      exact: false,
      icon: 'RedditOutlined',
      children: [
        { title: '机构管理', exact: true, path: '/auth/org', name: 'org', icon: 'GitlabOutlined', component: 'Org' },
        { title: '角色管理', exact: true, path: '/auth/role', name: 'role', icon: 'GitlabOutlined', component: 'Role' },
      ],
    },
  ]

    // function deep(){

    // }

    // function getMapByPath(routes,path){
    //   //根据当前路由的地址查到路由的路由表对象，以及上层的父级路由对象用于匹配面包屑
      
    //   routes.forEach(()=>{

    //   })
    // }

  

  
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
});
