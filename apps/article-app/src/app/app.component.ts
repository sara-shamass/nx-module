import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@nx-module/navigation';
import { CircleButtonComponent } from '@nx-module/circle-button';
import { UiComponentsComponent } from '@nx-module/ui-components';
import { SearchBarComponent } from '@nx-module/search-bar';
import { MovieCardComponent } from '@nx-module/movie-card';

@Component({
  imports: [RouterModule, CommonModule, NavigationComponent, CircleButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'article-app';
  showNav = false;

  toggleNav(): void {
    this.showNav = !this.showNav;
    console.log(this.showNav)
  }
}
