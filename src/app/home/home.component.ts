import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { CardComponent } from '../card/card.component';
import { PostI } from '../interfaces';
import { PostsService } from '../posts.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
  imports: [CommonModule, FilterComponent, CardComponent],
  standalone: true
})

export class HomeComponent {
  posts: PostI[] | [] = []
  filteredPosts: PostI[] | [] = []
  postsService: PostsService = inject(PostsService)
  isLoading: boolean = true

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.posts = await this.postsService.fetchAllPosts()
    this.filteredPosts = this.posts
    this.isLoading = false
  }

  setFilteredPosts(query: string) {
    if (query === '') {
      this.filteredPosts = this.posts
      return
    }
    this.filteredPosts = this.posts.filter((post) => post.title.includes(query) || post.body.includes(query))
  }
};
