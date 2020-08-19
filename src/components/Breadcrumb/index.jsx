import { Breadcrumb } from 'antd';
import React from 'react';
import {observer } from 'mobx-react'
import { useLocation } from 'react-router-dom'
import { asyncRoutes } from '../../store/router.store.js'
import { getMapByPath } from '../../utils/methods'
import { toJS } from 'mobx'

export const Crumb = observer(() => {
  const location=useLocation();
  const path=location.pathname;//当前页面的地址
  const routes=asyncRoutes.routes;//存储的路由表
  const rout = getMapByPath(routes,path)[0]||{};//当前路由的顶级路由对象
  console.log(toJS(rout) )

  

  
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
