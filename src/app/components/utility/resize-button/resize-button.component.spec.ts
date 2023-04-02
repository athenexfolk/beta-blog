import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeButtonComponent } from './resize-button.component';

describe('ResizeButtonComponent', () => {
  let component: ResizeButtonComponent;
  let fixture: ComponentFixture<ResizeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
