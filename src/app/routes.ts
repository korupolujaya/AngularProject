import { Routes , RouterModule } from '@angular/router';
import { UsersComponent } from './compoents/users/users.component';
import { PostsComponent } from './compoents/posts/posts.component';
import { HomeComponent } from './compoents/home/home.component';
const router:Routes=[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent },
    {path: 'users', component:UsersComponent },
    {path: 'posts', component:PostsComponent },
];

export const routing = RouterModule.forRoot(router);