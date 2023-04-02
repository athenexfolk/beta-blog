import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPostContentComponent } from './brief-post-content.component';

describe('BriefPostContentComponent', () => {
  let component: BriefPostContentComponent;
  let fixture: ComponentFixture<BriefPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefPostContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
