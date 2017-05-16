import './accordion.scss';

export const accordionComponent = {
  controller: () => {
    $( document ).ready(() => {
      // add listeners to accordion headers
        $('[th-accordion-header]').click(onClickHeader);

      function onClickHeader(e) {
        const clickedHeader = $(e.currentTarget);
        const parentAccordion = $(e.currentTarget).parents('[th-accordion]');
        const headerSections = parentAccordion.find('[th-accordion-header]');
        const contentSections = parentAccordion.find('[th-accordion-content]');
        const nextContent = $(e.currentTarget).next('[th-accordion-content]');


        // check if the the clicked header is that of an opened section
        const isExpanded = clickedHeader.hasClass('accordion-expanded');

        // start by collapsing visible content sections...
        $(headerSections).removeClass('accordion-expanded');
        $(contentSections).removeClass('accordion-expanded');
        $(contentSections).slideUp(500);

        // ... and then expand the clicked element if it was collapsed
        if (!isExpanded) {
          $(clickedHeader).addClass('accordion-expanded');
          $(nextContent).addClass('accordion-expanded').slideDown(500);
        }
      }
    });
  }
};