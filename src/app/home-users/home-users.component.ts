import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { UserI } from '../interfaces';
import { PostsService } from '../posts.service';


@Component({
	selector: 'home-users',
	templateUrl: './home-users.component.html',
  imports: [CommonModule, FilterComponent, RouterModule],
  standalone: true
})

export class HomeUsersComponent {
  users: UserI[] | [] = []
  filteredUsers: UserI[] | [] = []
  postsService: PostsService = inject(PostsService)
  isLoading: boolean = true

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.users = await this.postsService.fetchAllUsers()
    this.filteredUsers = this.users
    this.isLoading = false
  }

  setFilteredUsers(query: string) {
    if (query === '') {
      this.filteredUsers = this.users
      return
    }
    this.filteredUsers = this.users.filter((user) => user.name.includes(query) || user.username.includes(query) || user.email.includes(query))
  }
};
