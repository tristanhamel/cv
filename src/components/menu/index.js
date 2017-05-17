import template from './menu.html';

import './menu.scss';

export const menuComponent =  {
  selector: 'th-menu',
  template,
  controller: () => {
    const toggle = $('.menu-toggle-button');
    const menu = $('.menu');

    $(document).ready(() => {
      // populate menu
      const menuElemTemplate = `
        <li class="menu-item">
          ###
        </li>`;
      let menuElemsContent = '';
      $('.section-title')
        .each((i, elm) => {
          menuElemsContent += menuElemTemplate.replace('###', $(elm).text());
        });
      $('.menu-list').append(menuElemsContent);

      // spy scroll position
      let sectionsXY = registerOffset($('.section'));
      let scrollOffset = $(window).height() / 2;

      $(window).scroll(() => {
        const activeElem = sectionsXY.find(s => s.top < $(window).scrollTop() + scrollOffset);

        if(activeElem && !activeElem.isActive) {
          sectionsXY = sectionsXY
            .map(elm => elm.top === activeElem.top ?
              Object.assign(elm, {isActive: true}) :
              Object.assign(elm, {isActive: false}));

          $('.menu-item')
            .removeClass('active')
            .filter(i => i === activeElem.index)
            .addClass('active');

          menu.addClass('has-visible');
        } else if(!activeElem) {
          sectionsXY = sectionsXY
            .map(elm => Object.assign(elm, {isActive: false}));

          $('.menu-item')
            .removeClass('active');

          menu.removeClass('has-visible');
        }
      });
    });


    // hide/show menu on mobile
    toggle.click(() => {
      menu.toggleClass('visible');
    });

    function registerOffset(elements) {
      //we want to sort elements by offset
      return elements
        .map( (i, elm) => ({
          element: elm,
          top: $(elm).offset().top,
          index: i,
          isActive: false
        }))
        .toArray()
        .sort((a, b) => b.top - a.top);
    }
  }
};
