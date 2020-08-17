import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { observe } from 'mobx';
import { asyncRoutes } from '../../store/router.store';
const { SubMenu } = Menu;

export const IMenu = () => {
  const menuTreeMaker = (tree) => {
    return (MenuItem = asyncRoutes.routes.map((i, idx) => {
      if (!i.children || !i.children.length) {
        return (
          <Menu.Item key={idx} icon={<PieChartOutlined />}>
            {i.name}
          </Menu.Item>
        );
      } else {
        // return (
        //   <SubMenu key={idx} icon={<MailOutlined />} title="Navigation One">
        //     menuTreeMaker(i.children)
        //   </SubMenu>
        // );
      }
    }));
  };

  // return menuTreeMaker;

  return (
    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <Menu.Item key="7">Option 7</Menu.Item>
      <Menu.Item key="8">Option 8</Menu.Item>
    </SubMenu>
  );
};
