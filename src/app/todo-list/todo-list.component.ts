import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {
  displayedColumns: string[]
  @Input()  toDos: Todo[];
  @Output() deleteEvent = new EventEmitter<void>()
  dataSource = new MatTableDataSource<Todo>();
  isUserRoute: boolean;
  constructor(private actr: ActivatedRoute) { 
    this.isUserRoute = this.actr.snapshot.url[0].path === 'user'
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  deleteTodos(){
    this.deleteEvent.emit();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    if(this.isUserRoute){
      this.displayedColumns  = ['markedForDeletion', 'id', 'name', 'dueDate', 'completed'];
    }
    else{
      this.displayedColumns = ['id', 'name','user', 'dueDate', 'completed'];
    }
    this.dataSource.sort = this.sort
  }

  ngOnChanges(changes) {
    this.dataSource.data = this.toDos;
    this.dataSource.sort = this.sort;
  }

}