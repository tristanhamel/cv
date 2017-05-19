import { accordionComponent } from './components/accordion';
import { appComponent } from './components/app';
import { menuComponent } from './components/menu';
import { introComponent } from './components/intro';
import { contactsComponent } from './components/contacts';
import { skillsComponent } from './components/skills';
import { experienceComponent } from './components/experience';
import { educationComponent } from './components/education';
import { envoiComponent } from './components/envoi';

const modules = [
  accordionComponent,
  appComponent,
  menuComponent,
  introComponent,
  contactsComponent,
  skillsComponent,
  experienceComponent,
  educationComponent,
  envoiComponent
];

// base styles
import './styles/app.scss';
import './icons/css/fontello.css';

modules.forEach(module => {
  if(module.hasOwnProperty('selector') && module.hasOwnProperty('template')) {
    $(module.selector).append(module.template);
  }

  if(module.hasOwnProperty('controller')) {
    module.controller();
  }
});