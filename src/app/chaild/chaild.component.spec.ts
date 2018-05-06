import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildComponent } from './chaild.component';

describe('ChaildComponent', () => {
  let component: ChaildComponent;
  let fixture: ComponentFixture<ChaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
