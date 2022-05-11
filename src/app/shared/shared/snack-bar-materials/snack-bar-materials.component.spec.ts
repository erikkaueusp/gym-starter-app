import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarMaterialsComponent } from './snack-bar-materials.component';

describe('SnackBarMaterialsComponent', () => {
  let component: SnackBarMaterialsComponent;
  let fixture: ComponentFixture<SnackBarMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
