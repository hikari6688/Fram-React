import React from 'react';
import style from './index.module.scss';
import owl from '../../../assets/icons/owl.png';
import { commonStore } from '../../../store/common.store.js';
export const Title = () => {
  return (
    <div className={style.main}>
      <div className={`${style.icon}`}>
        <img src={owl} alt="" />
      </div>
      <div className={`${style.title}   ${commonStore.isCollapsed ? style.hide : ''}`}>
        <span>Frame</span>
      </div>
    </div>
  );
};
