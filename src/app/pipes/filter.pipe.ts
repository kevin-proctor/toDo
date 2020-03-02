import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(toDos: Todo[], filterText: string): Todo[] {
    return toDos.filter(todo=> todo.name.toLowerCase().includes(filterText.toLowerCase()));
  }

}