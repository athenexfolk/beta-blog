import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgroupComponent } from './navgroup.component';

describe('NavgroupComponent', () => {
  let component: NavgroupComponent;
  let fixture: ComponentFixture<NavgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
