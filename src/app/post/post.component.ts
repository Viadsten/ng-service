import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostI } from '../interfaces';
import { PostsService } from '../posts.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
  standalone: true,
  imports: [CommonModule, CommentsComponent, RouterModule],
})

export class PostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postsService: PostsService = inject(PostsService);
  post: PostI | undefined;
  isLoading: boolean = true;
  id: number = Number(this.route.snapshot.params['id']);

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.post = await this.postsService.fetchPostById(this.id)
    this.isLoading = false
  }
};
