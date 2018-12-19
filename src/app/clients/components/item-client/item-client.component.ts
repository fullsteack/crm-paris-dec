import { Component, Input, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  public states = Object.values(StateClient);

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit() {
  }
  public changeState(event) {
    const state = event.target.value;
    this.cs.update(this.item, state);
  }

}
