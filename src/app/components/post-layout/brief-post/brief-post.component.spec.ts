import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPostComponent } from './brief-post.component';

describe('BriefPostComponent', () => {
  let component: BriefPostComponent;
  let fixture: ComponentFixture<BriefPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
