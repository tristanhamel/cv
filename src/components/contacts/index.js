import template from './contacts.html';

import './contacts.scss';

export const contactsComponent = {
  selector: 'th-contacts',
  template,
  controller: () => {
    const introHeight = 500;
    const contactElement = $('.contacts');

    $(document).ready(() => {
      let allow = true;
      $(window).scroll((e) => {
        if(!allow) {
          return;
        }
        if(e.currentTarget.scrollY > introHeight) {
          contactElement.addClass('fixed');
        } else {
          contactElement.removeClass('fixed');
        }

        allow = false;
        window.setTimeout(() => {allow = true;}, 200);
      });
    });

    $('.contacts-toggle').click(() => {
      contactElement.toggleClass('visible');
    });
  }
};
