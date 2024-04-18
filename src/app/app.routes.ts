import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Ajicooljazz | Home',
    component: HomeComponent,
  },
  {
    path: 'projects',
    title: 'Ajicooljazz | Projects',
    component: ProjectComponent,
  },
  {
    path: 'contact',
    title: 'Ajicooljazz | Contact',
    component: ContactComponent,
  },
  {
    path: '**',
    title: 'Page not found',
    component: NotFoundComponent,
  },
];
