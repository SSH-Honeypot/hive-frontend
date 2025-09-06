import { Routes } from '@angular/router';
import {Weblog} from './pages/weblog/weblog';

export const routes: Routes = [
  {
    path: '',
    component: Weblog,
    title: 'SSH-Honeypot.de | Weblog'
  },
  {
    path: '**',
    redirectTo: '/',
  }
];
