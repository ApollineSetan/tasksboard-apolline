import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-edit.html'
})
export class TaskEdit {
  @Input() title = '';
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  editedTitle = '';

  ngOnInit() {
    this.editedTitle = this.title;
  }

  onSave() {
    if (!this.editedTitle.trim()) return;
    this.save.emit(this.editedTitle);
  }

  onCancel() {
    this.cancel.emit();
  }
}
