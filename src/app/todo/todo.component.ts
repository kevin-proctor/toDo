import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoStoreService } from '../services/todoStore.service';
import { UserStoreService } from '../services/userStore.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  toDos: Todo[] = [];
  todoForm: FormGroup
  constructor(private todoStore: TodoStoreService, private userStore: UserStoreService, private fb: FormBuilder) { 
  }

  logout(){
    this.userStore.logout()
  }

  addTodo(e){
    e.preventDefault()
    if(this.todoForm.valid){
      this.todoStore.addTodo(this.todoForm.value.user, this.todoForm.value.name, this.todoForm.value.dueDate);
      
    }
  }

  deleteTodos(){
    this.toDos.filter(t=> t.markedForDeletion).forEach(td=> this.todoStore.deleteTodo(td.id));
  }

  ngOnInit(): void {
    this.todoStore.todos$.subscribe(todos=> this.toDos = todos)
    this.todoForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      dueDate: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required])]
    })
    
  }

}