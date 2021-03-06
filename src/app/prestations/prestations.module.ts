import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormPrestationsComponent } from './components/form-prestations/form-prestations.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PageAddPrestationComponent, AddPrestationComponent, FormPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
  ]
})
export class PrestationsModule { }
