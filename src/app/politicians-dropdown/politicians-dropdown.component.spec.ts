import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticiansDropdownComponent } from './politicians-dropdown.component';

describe('PoliticiansDropdownComponent', () => {
  let component: PoliticiansDropdownComponent;
  let fixture: ComponentFixture<PoliticiansDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticiansDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticiansDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
