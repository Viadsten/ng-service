import { Injectable } from '@angular/core';
import { CommentI, PostI, UserI } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com/'

  protected postsList: PostI[] = []

  getAllPosts(): PostI[] {
    return this.postsList
  }

  getPostById(id: number): PostI | undefined {
    return this.postsList.find(post => post.id === id)
  }

  async fetchPostById(id: number) {
    if (this.getAllPosts().length) {
      return this.getPostById(id)
    }
    const response = await fetch(this.baseUrl + 'posts/' + id)
    return response.json()
  }

  async fetchAllPosts(): Promise<PostI[]> {
    if (this.getAllPosts().length) {
      return this.postsList
    }
    const response = await fetch(this.baseUrl + 'posts/')
    const posts:PostI[] = await response.json()
    this.postsList = posts
    return posts
  }

  async fetchCommentsByPostId(id: number): Promise<CommentI[]> {
    const response = await fetch(this.baseUrl + 'posts/' + id + '/comments')
    const comments = await response.json()
    return comments
  }

  async fetchUserById(id: number): Promise<UserI> {
    const response = await fetch(this.baseUrl + 'users/' + id)
    const user = await response.json()
    return user
  }

  async fetchAllUsers(): Promise<UserI[]> {
    const response = await fetch(this.baseUrl + 'users/')
    const users = await response.json()
    return users
  }
}

