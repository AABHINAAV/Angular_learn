import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCanLoadComponent } from './comp-can-load.component';

describe('CompCanLoadComponent', () => {
  let component: CompCanLoadComponent;
  let fixture: ComponentFixture<CompCanLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCanLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompCanLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
