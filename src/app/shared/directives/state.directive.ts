import { Directive, Input, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
