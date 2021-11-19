import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNGRXComponent } from './todos-ngrx.component';

describe('TodosNGRXComponent', () => {
  let component: TodosNGRXComponent;
  let fixture: ComponentFixture<TodosNGRXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosNGRXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosNGRXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
