import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostI } from '../interfaces';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true
})

export class CardComponent {
  @Input() post: PostI | undefined;
};
