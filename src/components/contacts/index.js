import template from './contacts.html';

import './contacts.scss';

const controller = () => {
  $(document).ready(() => {
    if(!window.print) {
      $('.print-action').css({display: 'none'});
    }

    $('.print-action').click(() => {
      window.print();
    });
  });
};

export const contactsComponent = {
  selector: 'th-contacts',
  template,
  controller
};
