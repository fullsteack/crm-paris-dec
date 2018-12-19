import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = State;
  // public states = Object.values(State);
  constructor(
    private ps: PrestationService
  ) {

  }

  ngOnInit() {
    // console.log(this.item);
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
  }

}
