import { Component, OnInit } from '@angular/core';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string; // public est accessible ds le html - si private uniquement dans la classe
  public faUser = faUser;
  public faBars = faBars;
  public faTimes = faTimes;
  public open = true;

  constructor() {
    //this.title = 'Olivier application';
  }

  ngOnInit() {
    this.title = 'Olivier application';

  }

}
