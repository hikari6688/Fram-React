import React from 'react';
import { asyncRoutes } from '../../store/router.store'
import { asyncRoutes as _asyncRoutes } from '../../router/module.router'
import { useHistory } from 'react-router-dom'
export const Login = () => {
  const history=useHistory();
  const login = () => {
    setTimeout(() => {
      const res = _asyncRoutes;
      asyncRoutes.setRoutes(res);
      history.push('/system/app');
    }, 1000);
  };
  return (
    <div>
      <button onClick={ login }>登陆</button>
    </div>
  );
};
