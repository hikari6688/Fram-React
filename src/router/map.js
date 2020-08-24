import { System } from '../views/system/index';
import { Role } from '../views/auth/role/index';
import { Org } from '../views/auth/org/index';
import { App } from '../views/app/index'
import { OrgAdd } from '../views/auth/org/add/index'
import { OrgUpdate } from '../views/auth/org/update/index'
export const ComponentsMap = {
  System: System,
  OrgList: Org,
  Role: Role,
  App:App,
  OrgAdd:OrgAdd,
  OrgUpdate:OrgUpdate
};
