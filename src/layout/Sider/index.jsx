import React, { useState, useEffect } from 'react';
import style from './sider.module.scss';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { SIDEBAR_WIDTH } from '../../consts/style';
import * as Icons from '@ant-design/icons';
import { commonStore } from '../../store/common.store';
import { asyncRoutes } from '../../store/router.store';
import { Title } from './Title/index';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { getMapByPath, showedItem,getRouteByPath } from '../../utils/methods';
const { SubMenu } = Menu;
const MenuItem = Menu.Item;
export const Sider = observer(() => {
  const makeMenuTree = function (menu) {
    if (!menu || !Array.isArray(menu) || !menu.length) {
      return null;
    }
    return menu.map((root) => {
      if (root.children) {
        const r = showedItem(root.children);
        if (r&&r.length) {
          return (
            <SubMenu
              key={root.path}
              title={
                <span>
                  {root.icon && React.createElement(Icons[root.icon])}
                  <span>{root.title}</span>
                </span>
              }
            >
              {makeMenuTree(r)}
            </SubMenu>
          );
        } else {
          <MenuItem key={root.name}>
            <Link to={root.path}>
              {root.icon && React.createElement(Icons[root.icon])}
              <span>{root.title}</span>
            </Link>
          </MenuItem>;
        }
      }
      return (
        <MenuItem key={root.name}>
          <Link to={root.path}>
            {/* {root.icon && React.createElement(Icons[root.icon])} */}
            <span>{root.title}</span>
          </Link>
        </MenuItem>
      );
    });
  };

  const location = useLocation();
  const [active, setActive] = useState([]);
  const [opened, setOpened] = useState([]);
  useEffect(() => {
    if (asyncRoutes.routes.length) {
      const parent = getMapByPath(asyncRoutes.routes, location.pathname)[0] || {};
      const current=getRouteByPath(asyncRoutes.routes, location.pathname)
      setActive(current.name)
      setOpened([parent.path]);
    }
  }, [asyncRoutes.routes]);

  return (
    <div className={style.side} style={{ width: commonStore.isCollapsed ? SIDEBAR_WIDTH[1] : SIDEBAR_WIDTH[0] }}>
      <Title />
      <Menu
        onOpenChange={(e) => {
          setOpened(e);
        }}
        onClick={(e) => {
          setActive(e.key);
        }}
        selectedKeys={active}
        openKeys={opened}
        mode="inline"
        theme="dark"
        inlineCollapsed={commonStore.isCollapsed}
      >
        {makeMenuTree(asyncRoutes.routes)}
      </Menu>
    </div>
  );
});
