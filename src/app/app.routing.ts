import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminMemberDetailComponent } from './admin-member-detail/admin-member-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'new-member',
    component: MemberCreateComponent,
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/member/:id',
    component: AdminMemberDetailComponent,
  },
  {
    path: 'admin/edit-member/:id',
    component: MemberUpdateComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);