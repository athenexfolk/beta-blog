import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefForumComponent } from './brief-forum.component';

describe('BriefForumComponent', () => {
  let component: BriefForumComponent;
  let fixture: ComponentFixture<BriefForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
