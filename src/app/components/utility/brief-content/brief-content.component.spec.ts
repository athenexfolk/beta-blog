import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefContentComponent } from './brief-content.component';

describe('BriefContentComponent', () => {
  let component: BriefContentComponent;
  let fixture: ComponentFixture<BriefContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
