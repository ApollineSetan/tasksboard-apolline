import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-highlight',
  standalone: true,
  templateUrl: './tasks-highlight.html',
  styleUrl: './tasks-highlight.css',
})
export class TasksHighlight {
  @Input() title = '';
}
