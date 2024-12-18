import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent {
  @Input() icon!: string;
  @Output() toggleNav = new EventEmitter<void>();

  onClick() {
    this.toggleNav.emit();
  }
}
