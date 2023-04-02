import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPostFootComponent } from './brief-post-foot.component';

describe('BriefPostFootComponent', () => {
  let component: BriefPostFootComponent;
  let fixture: ComponentFixture<BriefPostFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefPostFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefPostFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
