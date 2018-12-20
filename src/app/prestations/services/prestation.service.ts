import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake.prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
   }
  // get Collection
  public get collection(): Prestation[] {
    return this._collection;
  }

  // set Collection
  public set collection(col: Prestation[]) {
    this._collection = col;
  }

  public update(item: Prestation, state: State) {
    item.state = state;
    console.log(item.state);
  }

  // add item in Collection
  public add(item: Prestation) {
    this.collection.push(new Prestation(item));
  }
  // update item in collection

}
