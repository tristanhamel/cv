import template from './skills.html';

import './skills.scss';

export const skillsComponent = {
  selector: 'th-skills',
  template,
  controller: () => {

    // add stars
    const heartTemplate = '<span>&hearts;</span>';
    const emptyHeartTemplate = '<span>&#9825;</span>';
    $('.skills-list-elem').each((i, elem) => {
      let hearts = '';
      const heartsCount = parseInt($(elem).attr('hearts'));
      for(let i = 0; i < heartsCount; i++) {
        hearts += heartTemplate;
      }

      const emptyHeartsCount = 5 - heartsCount;
      for(let i = 0; i < emptyHeartsCount; i++) {
        hearts += emptyHeartTemplate;
      }
      $(elem).children('.skill-list-header').append(hearts);
    });
  }
};
