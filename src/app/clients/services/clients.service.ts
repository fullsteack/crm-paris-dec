import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake.clients';
import { StateClient } from 'src/app/shared/enums/client.enum';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  private _collection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  // get Collection
  public get collection(): Client[] {
    return this._collection;
  }

  // set Collection
  public set collection(col: Client[]) {
    this._collection = col;
  }

  public update(item: Client, state: StateClient) {
    item.state = state;
    console.log(item.state);

  }

}
