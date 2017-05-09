import { appComponent } from './components/app';
import { menuComponent } from './components/menu';
import { introComponent } from './components/intro';
import { contactsComponent } from './components/contacts';

const modules = [
  appComponent,
  menuComponent,
  introComponent,
  contactsComponent
];

// base styles
import './styles/app.scss';

modules.forEach(module => {
  if(module.hasOwnProperty('selector') && module.hasOwnProperty('template')) {
    $(module.selector).append(module.template);
  }

  if(module.hasOwnProperty('controller')) {
    module.controller();
  }
});