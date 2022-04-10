import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiAlunoComponent } from './exclui-aluno.component';

describe('ExcluiAlunoComponent', () => {
  let component: ExcluiAlunoComponent;
  let fixture: ComponentFixture<ExcluiAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluiAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluiAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
