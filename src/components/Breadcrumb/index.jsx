import { Breadcrumb } from 'antd';
import React from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import { asyncRoutes } from '../../store/router.store.js';
import { getMapByPath, getRouteByPath, findParentByPath,scanRoute } from '../../utils/methods';
import { toJS } from 'mobx';

export const Crumb = observer(() => {
  const location = useLocation();
  const path = location.pathname; //当前页面的地址
  const routes = asyncRoutes.routes; //存储的路由表
  if (routes && routes.length) {
    const rout = getMapByPath(routes, path)[0] || {}; //当前路由的顶级路由对象
    const currentRoute = getRouteByPath(routes, path); //当前路由对象
    // findParentByPath( routes,path );
    // console.log(toJS(rout));
    // console.log(toJS(currentRoute));
  
 
  // console.log(toJS(rout) )
  // console.log(toJS(toJS(currentRoute[0])))
  // console.log(toJS(toJS(currentRoute[1])))
  // console.log('找父节点',toJS(findParentByPath(routes,path)[0]))
  }
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
