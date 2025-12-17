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

  addTask() {
    if (!this.newTask.trim()) return;
    this.tasksService.addTask(this.newTask);
    this.newTask = '';
  }

  highlight(task: Task) {
    this.container.clear();
    const componentRef = this.container.createComponent(TasksHighlight);
    componentRef.instance.title = task.title;
  }
}
