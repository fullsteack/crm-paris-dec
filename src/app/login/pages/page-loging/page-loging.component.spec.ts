import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogingComponent } from './page-loging.component';

describe('PageLogingComponent', () => {
  let component: PageLogingComponent;
  let fixture: ComponentFixture<PageLogingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLogingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
