import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todos: Todo[], sortBy: string): Todo[] {
    let toSort = [...todos];
      return toSort.sort((a,b)=>{
        if(a[sortBy] === b[sortBy]){
          return 0
        }
        else{
          return a[sortBy] > b[sortBy] ? 1 : -1
        }
      })
  }

}