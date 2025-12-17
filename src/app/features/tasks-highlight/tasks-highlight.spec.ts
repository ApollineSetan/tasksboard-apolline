import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksHighlight } from './tasks-highlight';

describe('TasksHighlight', () => {
  let component: TasksHighlight;
  let fixture: ComponentFixture<TasksHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksHighlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksHighlight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
