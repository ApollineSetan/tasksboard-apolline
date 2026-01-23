import { Component, ComponentRef, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService, Task } from '../../../core/services/tasks-service';
import { TasksHighlight } from '../../tasks-highlight/tasks-highlight';
import { TaskEdit } from '../../tasks-edit/tasks-edit';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksPage {

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  newTask = '';
  tasks$: Observable<Task[]>;
  highlightedTaskId: number | null = null;

  constructor(public tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$; 
  }

  addTask(input: HTMLInputElement) {
    const title = input.value.trim();
    if (!title) return;
    this.tasksService.addTask(title);
    input.value = '';
  }

  highlight(task: Task) {
    if (this.highlightedTaskId === task.id) {
      this.container.clear();
      this.highlightedTaskId = null;
    } else {
      this.container.clear();
      const componentRef = this.container.createComponent(TasksHighlight);
      componentRef.instance.title = task.title;
      this.highlightedTaskId = task.id;
    }
  }

  deleteTask(id: number) {
    this.tasksService.deteleTask(id);
  }

  toggleCompleted(id: number) {
    this.tasksService.toggleCompleted(id);
  }

  editTask(task: Task) {
  this.container.clear();

  const componentRef: ComponentRef<TaskEdit> =
    this.container.createComponent(TaskEdit);

  componentRef.instance.title = task.title;

  componentRef.instance.save.subscribe((newTitle: string) => {
    this.tasksService.updateTask(task.id, newTitle);
    this.container.clear();
  });

  componentRef.instance.cancel.subscribe(() => {
    this.container.clear();
  });
}

}
