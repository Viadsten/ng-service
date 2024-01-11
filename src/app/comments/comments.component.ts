import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../posts.service';
import { CommentI } from '../interfaces';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'comments',
	templateUrl: './comments.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})

export class CommentsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  postsService: PostsService = inject(PostsService)
  id: number = Number(this.route.snapshot.params['id'])
  comments: CommentI[] | [] = []
  isLoading: boolean = true

  async ngOnInit(): Promise<void> {
    this.comments = await this.postsService.fetchCommentsByPostId(this.id)
    this.isLoading = false
  }
};
