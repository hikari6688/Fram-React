import React,{ useEffect} from 'react';
import style from './main.module.scss';
import { Switch } from 'react-router-dom';
import { RouterMaker } from '../../utils/RouterMaker';
import { asyncRoutes } from '../../store/router.store';

export const Main = () => {
  return (
    <div className={style.main}>
      <Switch>{(asyncRoutes.routes && RouterMaker(asyncRoutes.routes)) || null}</Switch>
    </div>
  );
};
