import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateReadComponent } from './estimate-read.component';

describe('EstimateReadComponent', () => {
  let component: EstimateReadComponent;
  let fixture: ComponentFixture<EstimateReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
