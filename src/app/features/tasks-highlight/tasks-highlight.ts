import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tasks-highlight',
  standalone: true,
  templateUrl: './tasks-highlight.html',
  styleUrl: './tasks-highlight.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TasksHighlight {
  @Input() title = '';
}
