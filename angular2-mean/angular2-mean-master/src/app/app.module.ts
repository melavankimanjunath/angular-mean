import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
<<<<<<< HEAD
=======
import { FormsComponent } from './forms/forms.component';
>>>>>>> 542f3318caf6005a4c1a49aec349459b8005fa82

import { PostsService } from './posts.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
<<<<<<< HEAD
=======
  },
  {
    path: 'forms',
    component: FormsComponent
>>>>>>> 542f3318caf6005a4c1a49aec349459b8005fa82
  }
];

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PostsComponent
=======
    PostsComponent,
    FormsComponent
>>>>>>> 542f3318caf6005a4c1a49aec349459b8005fa82
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
