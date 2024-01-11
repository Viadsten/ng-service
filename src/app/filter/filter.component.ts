import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { PostI } from '../interfaces';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class FilterComponent {
  filterResults: PostI[] | [] = []
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(event: SubmitEvent | MouseEvent, input: string): void {
    event.preventDefault()
    this.clicked.emit(input)
  }
};
