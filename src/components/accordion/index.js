import './accordion.scss';

export const accordionComponent = {
  controller: () => {
    $( document ).ready(() => {
      // add listeners to accordion headers
      $('[th-accordion-header]').click(onClickHeader);

      function onClickHeader(e) {
        const parentAccordion = $(e.currentTarget).parents('[th-accordion]');
        const contentSections = parentAccordion.find('[th-accordion-content]');
        const nextContent = $(e.currentTarget).next('[th-accordion-content]');

        // check if the section following the clicked header is opened
        const isExpanded = nextContent.hasClass('accordion-expanded');

        // start by collapsing visible content sections...
        $(contentSections).removeClass('accordion-expanded');
        $(contentSections).slideUp(500);

        // ... and then expand the clicked element if it was collapsed
        if (!isExpanded) {
          $(nextContent).addClass('accordion-expanded').slideDown(500);
        }
      }
    });
  }
};