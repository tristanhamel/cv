import { accordionComponent } from './components/accordion';
import { appComponent } from './components/app';
import { menuComponent } from './components/menu';
import { introComponent } from './components/intro';
import { contactsComponent } from './components/contacts';
import { skillsComponent } from './components/skills';

const modules = [
  accordionComponent,
  appComponent,
  menuComponent,
  introComponent,
  contactsComponent,
  skillsComponent
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