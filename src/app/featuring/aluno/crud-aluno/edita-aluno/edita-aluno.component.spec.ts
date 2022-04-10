import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAlunoComponent } from './edita-aluno.component';

describe('EditaAlunoComponent', () => {
  let component: EditaAlunoComponent;
  let fixture: ComponentFixture<EditaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
