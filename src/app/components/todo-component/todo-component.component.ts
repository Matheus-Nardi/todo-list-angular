import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  imports: [],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.scss'
})
export class TodoComponentComponent {

  public tasks: Array<{ name: string, isCompleted: boolean, isEditing: boolean }> = [];
  public dateTime;
  public dayOfWeek: string;

  constructor() {
    const now = new Date();
    this.dateTime = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);

    this.dayOfWeek = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long'
    }).format(now).toUpperCase();

  }

  public addNewTask(value: string) {
    if (value.trim()) {
      this.tasks.push({ name: value, isCompleted: false, isEditing: false });
    }
  }

  public completeTask(task: { name: string, isCompleted: boolean }) {
    task.isCompleted = !task.isCompleted;
  }

  public deleteTask(taskToDelete: { name: string, isCompleted: boolean }) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }

  public editTask(task: { name: string; isCompleted: boolean; isEditing: boolean }) {
    task.isEditing = true;
  }

  public saveTask(task: { name: string; isEditing: boolean }, newName: string) {
    if (newName.trim()) {
      task.name = newName.trim();
      task.isEditing = false;
    }
  }

  public cancelEdit(task: { isEditing: boolean }) {
    task.isEditing = false;
  }


}
