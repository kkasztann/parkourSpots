import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSpotsPageComponent } from './list-of-spots-page.component';

describe('ListOfSpotsPageComponent', () => {
  let component: ListOfSpotsPageComponent;
  let fixture: ComponentFixture<ListOfSpotsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfSpotsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSpotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
