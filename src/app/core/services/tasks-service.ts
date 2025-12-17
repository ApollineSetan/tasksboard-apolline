import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Comprendre le lazy loading', completed: false },
    { id: 3, title: 'Séparer composants et services', completed: false }
  ]);

  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string): void {
    if (!title.trim()) return;

    const tasks = this.tasksSubject.value;
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasksSubject.next([...tasks, newTask]);
  }

  deteleTask(id: number): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
  }

  toggleCompleted(id: number): void {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(tasks);
  }
}
