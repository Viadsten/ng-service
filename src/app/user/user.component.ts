import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../posts.service';
import { UserI } from '../interfaces';

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})

export class UserComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  postsService: PostsService = inject(PostsService)
  id: number = Number(this.route.snapshot.params['id'])
  user: UserI | undefined = undefined
  isLoading: boolean = true

  async ngOnInit(): Promise<void> {
    this.user = await this.postsService.fetchUserById(this.id)
    this.isLoading = false
  }
};
