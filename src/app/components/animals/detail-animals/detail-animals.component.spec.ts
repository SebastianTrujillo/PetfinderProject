import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnimalsComponent } from './detail-animals.component';

describe('DetailAnimalsComponent', () => {
  let component: DetailAnimalsComponent;
  let fixture: ComponentFixture<DetailAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
