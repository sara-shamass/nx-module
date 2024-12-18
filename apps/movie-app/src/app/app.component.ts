import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@nx-module/navigation';
import { CircleButtonComponent } from '@nx-module/circle-button';
import { UiComponentsComponent } from '@nx-module/ui-components';
import { SearchBarComponent } from '@nx-module/search-bar';
import { MovieCardComponent } from '@nx-module/movie-card';

@Component({
  imports: [RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule, CircleButtonComponent, SearchBarComponent, MovieCardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
  IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
  movies: any[] = [];

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  constructor(private http: HttpClient) {}
  showNav = false;

  toggleNav(): void {
    this.showNav = !this.showNav;
    console.log(this.showNav)
  }
  ngOnInit(): void {
    this.getMovies(this.API_URL);
  }

  getMovies(url: string): void {
    this.http.get<any>(url).subscribe((data) => {
      if (data && data.results) {
        this.movies = data.results;
      }
    });
  }

  getClassByRate(vote: number): string {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  // Search event handler
  onSubmit(searchTerm: string): void {
    if (searchTerm && searchTerm.trim() !== '') {
      this.getMovies(this.SEARCH_API + searchTerm);
      this.searchForm.reset();
    } else {
      window.location.reload();
    }
  }
}
