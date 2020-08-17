// import { ComponentsMap } from '../router/map';
import React from 'react';
import { Layout } from '../layout/index';
import { Class } from '../views/class/index';
import { System } from '../views/system/index';
import { HashRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';
const ComponentsMap={
  Layout:Layout,
  Class:Class,
  System:System,
}

export const asyncRoutes = (routes) => {
  const newRouterMap = routes.map((i, idx) => {
    return <Route path={i.path} exact component={ComponentsMap[i.component]} />;
    // return <div> { idx } </div>
  });
  return newRouterMap;
};
