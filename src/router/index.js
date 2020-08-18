import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { asyncRoutes } from '../store/router.store'
import { Layout } from '../layout/index';
import { Login } from '../views/login/index'
export const RouterMap = () => {
  useEffect(() => {
    if(!asyncRoutes.routes.length){
      //拉取路由
      asyncRoutes.getRoutes();
    }
  });
  return (
    <Router>
      <Switch>
        <Route path="/login" exact  component={ Login }/>
        <Route path="/"  component={ Layout }/>
      </Switch>
    </Router>
  );
};
