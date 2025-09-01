import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCanActivateComponent } from './comp-can-activate.component';

describe('CompCanActivateComponent', () => {
  let component: CompCanActivateComponent;
  let fixture: ComponentFixture<CompCanActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCanActivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompCanActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
