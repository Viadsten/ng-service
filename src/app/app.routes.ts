import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { SpleetScreenComponent } from './spleet-screen/spleet-screen.component';
import { HomeUsersComponent } from './home-users/home-users.component';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    component: SpleetScreenComponent,
    title: 'Home page'
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    title: 'Post'
  }, {
    path: 'users/:id',
    component: UserComponent,
    title: 'User'
  },
  {
    path: 'posts',
    component: HomeComponent,
    title: 'Posts page'
  },
  {
    path: 'users',
    component: HomeUsersComponent,
    title: 'Users page'
  },
];
