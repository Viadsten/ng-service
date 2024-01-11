import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})

export class HeaderComponent {
  @Input() logo: string = '';
};
