import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLogingComponent } from './pages/page-loging/page-loging.component';
import { LogingRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [PageLogingComponent],
  imports: [
    CommonModule,
    LogingRoutingModule
  ]
})
export class LoginModule { }
