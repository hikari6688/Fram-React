import { observable, action } from 'mobx';

class AsyncRoutes {
  @observable
  routes = [
    {
      name: 'App',
      component: App,
      path: '/',
      exact: true,
      redirect:'/system',
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
  @action
  setRoutes(routes) {
    this.routes = routes;
  }
}
export const asyncRoutes = new AsyncRoutes();
