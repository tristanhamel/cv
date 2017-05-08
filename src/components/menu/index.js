import template from './menu.html';

import './menu.scss';

export const menuComponent =  {
  selector: 'th-menu',
  template,
  controller: () => {
    const toggle = $('.menu-toggle');
    const menu = $('.menu-list');
    // hide/show menu toggle
    toggle.click(() => {
      menu.toggleClass('visible');
    });
  }
};
