import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


const appRoutes: Routes = [
  { path: '', component: PageClientComponent },
  { path: 'add', component: PageAddClientComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
