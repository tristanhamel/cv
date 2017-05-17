import './accordion.scss';

export const accordionComponent = {
  controller: () => {
    $( document ).ready(() => {
      // add listeners to accordion headers
        $('[th-accordion-section]').click(onClick);

      function onClick(e) {
        const clickedSection = $(e.currentTarget);
        // check if it is an opened section
        const isExpanded = clickedSection.hasClass('accordion-expanded');

        clickedSection
          .parents('[th-accordion]')
          .find('.accordion-expanded')
          .removeClass('accordion-expanded')
          .find('[th-accordion-content]')
          .slideUp(300);

        if (!isExpanded) {
          clickedSection
            .addClass('accordion-expanded')
            .find('[th-accordion-content]')
            .slideDown(300);
        }
      }
    });
  }
};