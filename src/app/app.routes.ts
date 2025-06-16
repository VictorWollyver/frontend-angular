import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormModuleComponent } from './components/form-module/form-module.component';
import { RenderListModuleComponent } from './components/render-list-module/render-list-module.component';
import { StatesModuleComponent } from './components/states-module/states-module.component';
import { EffectModuleComponent } from './components/effect-module/effect-module.component';
import { LoginReactiveFormsComponent } from './components/login-reactive-forms/login-reactive-forms.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form-module',
    component: FormModuleComponent
  },
  {
    path: 'render-list-module',
    component: RenderListModuleComponent,
  },
  {
    path: 'states-module',
    component: StatesModuleComponent,
  },
  {
    path: 'effect-module',
    component: EffectModuleComponent,
  },
  {
    path: 'login-reactive-forms',
    component: LoginReactiveFormsComponent,
  }
];
