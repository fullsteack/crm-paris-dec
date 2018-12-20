import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestations',
  templateUrl: './form-prestations.component.html',
  styleUrls: ['./form-prestations.component.scss']
})
export class FormPrestationsComponent implements OnInit {
  @Output() nbItem: EventEmitter<Prestation> = new EventEmitter();
  public states = State;
  public form: FormGroup;
  private init = new Prestation();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
  this.form = this.fb.group(
    {
      id : [this.init.id],
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(3)])],
      nbJours : [this.init.nbJours],
      tjmHt : [this.init.tjmHt],
      tauxTva : [this.init.tauxTva],
      state : [this.init.state],
      comment: [this.init.comment]
    }
  );
  }

  public onSubmit() {
    this.nbItem.emit(this.form.value);
  }

}
