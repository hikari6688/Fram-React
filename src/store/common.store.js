import { observable, action } from 'mobx';

class CommonStore {
  @observable
  isCollapsed = false;
  @observable
  finished = false;
  @action
  changeCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
export const commonStore = new CommonStore();
