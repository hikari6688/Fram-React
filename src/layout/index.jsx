import { Sider } from './Sider/index';
import { Main } from './Main/index';
import { Header } from './Header/index';
import React, { useEffect } from 'react';
import { Crumb } from '../components/Breadcrumb/index';

import style from './index.module.scss';
export const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.left}>
        <Sider />
      </div>
      <div className={style.right}>
        <div className={style.head}>
          <Header />
        </div>
        <div className={style.main}>
          <div className={style.crumb}>
            <Crumb></Crumb>
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
};
