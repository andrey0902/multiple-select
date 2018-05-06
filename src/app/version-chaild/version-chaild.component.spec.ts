import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionChaildComponent } from './version-chaild.component';

describe('VersionChaildComponent', () => {
  let component: VersionChaildComponent;
  let fixture: ComponentFixture<VersionChaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionChaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
