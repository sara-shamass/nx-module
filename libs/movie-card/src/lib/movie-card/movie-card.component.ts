import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() poster!: string;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() overview!: string;

  get ratingClass() {
    if (this.rating >= 8) return 'green';
    if (this.rating >= 5) return 'orange';
    return 'red';
  }
}
