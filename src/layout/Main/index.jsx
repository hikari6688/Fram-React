import React from 'react';
import style from './main.module.scss';
import { Route, Switch } from 'react-router-dom';

// import { asyncRoutes } from '../../utils/generator';
import { Class } from '../../views/class/index';
import { System } from '../../views/system/index';

export const Main = () => {
  const list = [
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
  ];
  // const routes = asyncRoutes(list);
  return (
    <div className={style.main}>
      <Switch>
        {/* {routes} */}
        <Route path="/system" exact component={System} />
        <Route path="/class" exact component={Class} />
      </Switch>
    </div>
  );
};
