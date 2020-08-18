import React from 'react';
import { asyncRoutes } from '../../store/router.store'
import { useHistory } from 'react-router-dom'
export const Login = () => {
  const history=useHistory();
  const login = () => {
    setTimeout(() => {
      const res = [
        {
          name: 'App',
          component: 'App',
          path: '/',
          exact: true,
          redirect: '/system',
          children: [
            {
              title: '系统设置',
              path: 'system',
              name: 'system',
              component: 'System',
            },
            {
              title: '机构管理',
              path: 'org',
              name: 'org',
              component: 'Org',
            },
          ],
        },
      ];
      asyncRoutes.setRoutes(res[0].children);
      history.push('/system');
    }, 1000);
  };
  return (
    <div>
      <button onClick={ login }>登陆</button>
    </div>
  );
};
