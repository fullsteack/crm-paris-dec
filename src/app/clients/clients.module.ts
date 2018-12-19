import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

@NgModule({
  declarations: [PageClientComponent, ItemClientComponent, ListClientsComponent, PageAddClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
