import template from './menu.html';

import './menu.scss';

export const menuComponent =  {
  selector: 'th-menu',
  template,
  controller: () => {
    const toggle = $('.menu-toggle-button');
    const menu = $('.menu');
    let sectionsXY;

    $(document).ready(() => {
      // populate menu
      const menuElemTemplate = `
        <li class="menu-item" l18n>
          ###
        </li>`;
      let menuElemsContent = '';
      $('.section-title')
        .each((i, elm) => {
          menuElemsContent += menuElemTemplate.replace('###', $(elm).text());
        });
      $('.menu-list').append(menuElemsContent);

      // spy scroll position
      sectionsXY = registerOffset($('.section'));
      const scrollOffset = 100;

      // roughly the header's height
      const topOffset = 500;

      $(window).scroll((e) => {
        const scrollTop = $(e.target).scrollTop();

        const activeElem = sectionsXY.find(s => $(s.element).offset().top < scrollTop + scrollOffset);

        if(activeElem && !activeElem.isActive && scrollTop > topOffset) {
          sectionsXY = sectionsXY
            .map(elm => elm.top === activeElem.top ?
              Object.assign(elm, {isActive: true}) :
              Object.assign(elm, {isActive: false}));

          $('.menu-item')
            .removeClass('active')
            .filter(i => i === activeElem.index)
            .addClass('active');

          menu.addClass('has-visible');
        } else if(!activeElem || scrollTop < topOffset) {
          sectionsXY = sectionsXY
            .map(elm => Object.assign(elm, {isActive: false}));

          $('.menu-item')
            .removeClass('active');

          menu.removeClass('has-visible');
        }
      });

      // menu scroll links
      const menuItems = $('.menu-item');
      menuItems.click(event => {
        menu.removeClass('visible');

        const index = menuItems.index(event.target);
        const target = sectionsXY
          .find(section => section.index === index);

        if(!target || target.isActive) {
          return;
        }

        // we want to give 20px offset for the first element
        // so that the side menu elem remains active after the scroll..
        const offset = index ? $(target.element).offset().top : $(target.element).offset().top;

        // need to animate both body and html for FF
        $('body,html').animate({scrollTop: offset}, 700);
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
