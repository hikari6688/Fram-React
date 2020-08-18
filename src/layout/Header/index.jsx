import React from 'react';
import style from './header.module.scss';
import { commonStore } from '../../store/common.store.js';
import { Button, Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import avatar from '../../assets/images/kotori.jpg';
export const Header = observer(() => {
  const history = useHistory();
  const toggleCollapsed = () => {
    commonStore.setCollapsed();
  };
  const logout = () => {
    setTimeout(() => {
      history.push('/login');
    }, 1000);
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">查看消息</Menu.Item>
      <Menu.Item key="1">重置密码</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={logout}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={style.header}>
      <div className={style.btn}>
        <Button type="primary" onClick={toggleCollapsed}>
          {React.createElement(commonStore.isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <div className={style.avatar}>
          <img src={avatar} alt="" />
        </div>
      </Dropdown>
    </div>
  );
});
