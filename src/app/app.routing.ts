import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MemberCreateComponent } from './member-create/member-create.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new-member',
    component: MemberCreateComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);