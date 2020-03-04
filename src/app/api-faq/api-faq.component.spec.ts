import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFAQComponent } from './api-faq.component';

describe('ApiFAQComponent', () => {
  let component: ApiFAQComponent;
  let fixture: ComponentFixture<ApiFAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiFAQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
