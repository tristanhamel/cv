import { appComponent } from './components/app';
import { menuComponent } from './components/menu';

const modules = [
  appComponent,
  menuComponent
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