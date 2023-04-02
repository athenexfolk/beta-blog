import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListPageComponent } from './forum-list-page.component';

describe('ForumListPageComponent', () => {
  let component: ForumListPageComponent;
  let fixture: ComponentFixture<ForumListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
