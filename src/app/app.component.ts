import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponentComponent } from './components/todo-component/todo-component.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponentComponent],
  template: '<app-todo-component/>',
  styles: ''
})
export class AppComponent {

}
