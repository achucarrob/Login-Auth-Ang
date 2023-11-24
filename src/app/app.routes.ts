import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuardGuard } from '../app/auth-guard.guard';
import { LoginComponent } from './main/login/login.component';
import { ProfileComponent } from './main/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
