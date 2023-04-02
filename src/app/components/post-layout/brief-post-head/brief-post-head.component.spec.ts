import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPostHeadComponent } from './brief-post-head.component';

describe('BriefPostHeadComponent', () => {
  let component: BriefPostHeadComponent;
  let fixture: ComponentFixture<BriefPostHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefPostHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefPostHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
