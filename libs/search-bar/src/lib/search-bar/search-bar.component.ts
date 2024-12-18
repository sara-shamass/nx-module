import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-search-bar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
})
export class SearchBarComponent {
  @Input() searchForm!: FormGroup;
  @Output() search = new EventEmitter<string>();  

  onInputChange() {
    const searchValue = this.searchForm.value.search?.trim();
    if (searchValue) {
      this.search.emit(searchValue);
    }
  }
}
