import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { Layout } from '../layout/index.jsx';
import { Login } from '../views/login/index'
export const RouterMap = () => {
  useEffect(() => {
    console.log('hook');
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/login" exact  component={ Login }/>
        <Route path="/"  component={ Layout }/>
      </Switch>
    </Router>
  );
};
