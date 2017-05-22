import i18nData from './i18n.json';
import template from './l18n.html';
import './l18n.scss';

export const i18nComponent = {
  selector: 'l18n',
  template,
  controller: () => {
    let collection;
    let currentLang = 'en';

    $(document).ready(() => {
      // store collection of elements having strings needing to be localized
      collection = $('[l18n]')
        .map((index, element) =>({
          index,
          element,
          id: $(element).text().trim(),
          l18n: i18nData.find(elm => elm.id === $(element).text().trim())
        }))
        .toArray();

      localize();

      $('.langToggle').click((e) => {
        const lang = $(e.target).attr('l18n');

        if(lang !== currentLang){
          currentLang = lang;
          localize();
        }
      });
    });

    function localize() {
      collection.forEach(elm => {
        if(elm.l18n && elm.l18n[currentLang]) {
          $(elm.element).text(elm.l18n[currentLang]);
        } else {
          console.error('missing localization for ' + elm.id );
        }
      });
    }
  }
};
