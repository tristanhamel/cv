import template from './contacts.html';

import './contacts.scss';

const controller = () => {
  $(document).ready(() => {
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
