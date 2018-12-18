import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLogingComponent } from './login/pages/page-loging/page-loging.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLogingComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ]
})

export class AppRoutingModule { }
