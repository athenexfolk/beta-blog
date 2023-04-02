import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBackgroundButtonComponent } from './change-background-button.component';

describe('ChangeBackgroundButtonComponent', () => {
  let component: ChangeBackgroundButtonComponent;
  let fixture: ComponentFixture<ChangeBackgroundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBackgroundButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBackgroundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
