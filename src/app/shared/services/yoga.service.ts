import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { YogaCategory } from '../interfaces/yoga.interface';

@Injectable({
  providedIn: 'root',
})
export class YogaService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  categoriesName = signal<string[]>([]);


    constructor() {
    this.loadCategories();
  }

  loadCategories() {
    const url = `${this.apiUrl}/categories`;
    this.http.get<YogaCategory[]>(url).subscribe((categoriesObject) => {
      const categoriesMapped = this.categoriesMapper(categoriesObject);
      this.categoriesName.set(categoriesMapped);
    });
  }

  categoriesMapper(arrayCategories: YogaCategory[]) {
    return arrayCategories.map((category) => category.category_name);
  }
}
