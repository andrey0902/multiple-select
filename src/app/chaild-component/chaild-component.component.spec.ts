import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildComponentComponent } from './chaild-component.component';

describe('ChaildComponentComponent', () => {
  let component: ChaildComponentComponent;
  let fixture: ComponentFixture<ChaildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
