import React, { useState } from 'react';
import style from './sider.module.scss';
import { Menu, Button } from 'antd';
import { SIDEBAR_WIDTH } from '../../consts/style';
import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
import { commonStore } from '../../store/common.store';
import { asyncRoutes } from '../../store/router.store';
import { IMenu } from '../../components/Menu/index'
import { Title } from './Title/index';
import { observer } from 'mobx-react';
const { SubMenu } = Menu;

export const Sider = observer(() => {
  return (
    <div className={style.side} style={{ width: commonStore.isCollapsed ? SIDEBAR_WIDTH[1] : SIDEBAR_WIDTH[0] }}>
      {/* <Button type="primary" onClick={ (e)=>toggleCollapsed({isCollapsed:!collapse.isCollapsed }) } style={{ marginBottom: 16 }}>
        {React.createElement(collapse.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button> */}
      <Title />
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={commonStore.isCollapsed}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        {/* <IMenu/> */}
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
});
// export const Sider=observe(_Sider)
