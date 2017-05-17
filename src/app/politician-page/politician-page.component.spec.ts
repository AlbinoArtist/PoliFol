import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianPageComponent } from './politician-page.component';

describe('PoliticianPageComponent', () => {
  let component: PoliticianPageComponent;
  let fixture: ComponentFixture<PoliticianPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticianPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
