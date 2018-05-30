import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkourPageComponent } from './parkour-page.component';

describe('ParkourPageComponent', () => {
  let component: ParkourPageComponent;
  let fixture: ComponentFixture<ParkourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
