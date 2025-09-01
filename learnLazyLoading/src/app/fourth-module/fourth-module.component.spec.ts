import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthModuleComponent } from './fourth-module.component';

describe('FourthModuleComponent', () => {
  let component: FourthModuleComponent;
  let fixture: ComponentFixture<FourthModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
