import { observable, action } from 'mobx';
import { asyncRoutes as _asyncRoutes } from '../router/module.router';

class AsyncRoutes {
  @observable
  routes = [];
  @action
  getRoutes() {
    return new Promise((_resolve, _reject) => {
      function fetchRoutes() {
        return new Promise((resolve, reject) => {
          const res = _asyncRoutes;
          resolve(res);
        });
      }
      fetchRoutes().then((res) => {
        this.setRoutes(res);
        _resolve()
      });
    });
  }
  @action
  setRoutes(routes) {
    this.routes = routes;
  }
}
export const asyncRoutes = new AsyncRoutes();
