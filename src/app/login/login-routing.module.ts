import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLogingComponent } from './pages/page-loging/page-loging.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: PageLogingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LogingRoutingModule { }
