import { ComponentsMap } from '../router/map';
import { asyncRoutes } from '../store/router.store';
import React, { useEffect } from 'react';
import { toJS } from 'mobx'
import { HashRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom';

export const RouterMaker = (_routes) => {
  const makeRoutes = (routes) => {
    return routes.map((i) => {
      if (i.children) {
        return makeRoutes(i.children);
      }
      return <Route key={i.name} path={i.path} exact={i.exact} component={ComponentsMap[i.component]} />;
    });
  };
  const routerMap=makeRoutes(_routes)
  return routerMap
};
