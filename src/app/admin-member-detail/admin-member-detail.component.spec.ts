import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemberDetailComponent } from './admin-member-detail.component';

describe('AdminMemberDetailComponent', () => {
  let component: AdminMemberDetailComponent;
  let fixture: ComponentFixture<AdminMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
