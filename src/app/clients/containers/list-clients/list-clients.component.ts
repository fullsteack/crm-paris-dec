import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];

  constructor(
    private cs: ClientsService,
  ) {
  }

  ngOnInit() {
    this.collection = this.cs.collection;
    this.headers = [
      'nom',
      'email',
      'state',
      'delete'
    ];
  }

}
