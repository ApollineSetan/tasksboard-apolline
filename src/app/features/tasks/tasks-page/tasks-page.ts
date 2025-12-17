import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService, Task } from '../../../core/services/tasks-service';
import { TasksHighlight } from '../../tasks-highlight/tasks-highlight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-page.html'
})
export class TasksPage {

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  newTask = '';
  tasks$: Observable<Task[]>; 

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
    this.container.clear();
    const componentRef = this.container.createComponent(TasksHighlight);
    componentRef.instance.title = task.title;
  }

  deleteTask(id: number) {
    this.tasksService.deteleTask(id);
  }

  toggleCompleted(id: number) {
    this.tasksService.toggleCompleted(id);
  }
}
