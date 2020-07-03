import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaccComponent } from './listacc.component';

describe('ListaccComponent', () => {
  let component: ListaccComponent;
  let fixture: ComponentFixture<ListaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
