import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  imports: [],
  templateUrl: './side-panel.html',

})
export class SidePanel {
  arrayCategories = input<string[]>();
  selectedCategory = signal<string>('');
  selectedCategoryChange = output<string>();


  onRadioButtonChange(event: Event | KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const categoria = input.value;
    this.selectedCategory.set(categoria);
    this.selectedCategoryChange.emit(this.selectedCategory());
  }

}


