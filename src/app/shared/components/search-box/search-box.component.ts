//Imports
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Decorador
@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})

// La Clase:
export class SearchBoxComponent {
  @Input() placeholder: string = 'Introduce el término de búsqueda...';
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(value: string) {
    this.searchChange.emit(value);
  }
}
