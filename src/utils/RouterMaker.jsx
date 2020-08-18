import { ComponentsMap } from '../router/map';
import { asyncRoutes } from '../store/router.store'
import React ,{ useEffect }from 'react';
import { HashRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';

export const RouterMaker = (routes) => {
  const newRouterMap = routes.map((i, idx) => {
    return <Route key={ i.name } path={i.path} exact component={ComponentsMap[i.component]} />;
  });
  return newRouterMap;
};
