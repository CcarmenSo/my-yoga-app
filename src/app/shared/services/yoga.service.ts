import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { YogaCategory, YogaPose } from '../interfaces/yoga.interface';

@Injectable({
  providedIn: 'root',
})
export class YogaService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  categoriesName = signal<string[]>([]);
  categories = signal<any[]>([]);


  //   constructor() {
  //   this.loadCategories();
  // }

  loadCategoryByName(name: string) {
    const url = `${this.apiUrl}/categories?name=${name}`;
    return this.http.get<YogaCategory>(url);
  }

//   categoriesNameMapper(arrayCategories: YogaCategory[]) {
//     return arrayCategories.map((category) => category.category_name);
    
//   }

//   categoriesMapper(arrayCategories: YogaCategory[]) {
//     return arrayCategories.map((category) =>[ ...this.categories(), category.poses]);
    
// }

}
