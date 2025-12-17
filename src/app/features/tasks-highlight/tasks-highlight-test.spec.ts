import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksHighlight } from './tasks-highlight';

describe('TasksHighlight', () => {
  let component: TasksHighlight;
  let fixture: ComponentFixture<TasksHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksHighlight]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksHighlight);
    component = fixture.componentInstance;
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher le titre statique', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent)
      .toContain('Tâche mise en avant');
  });

  it('devrait afficher le titre passé en input', () => {
    component.title = 'Nouvelle tâche';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent)
      .toContain('Nouvelle tâche');
  });
});
