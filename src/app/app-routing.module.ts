import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchMovieComponent } from '../app/search-movie/search-movie.component';


const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'film-list', component: FilmListComponent },
  { path: 'search-movie', component: SearchMovieComponent },
  { path: '',
  redirectTo: '/user',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
