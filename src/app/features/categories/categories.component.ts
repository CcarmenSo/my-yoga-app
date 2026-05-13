import { Component, inject, signal } from '@angular/core';
import { YogaService } from '../../shared/services/yoga.service';
import { SidePanel } from "../../shared/components/side-panel/side-panel";
import { AsanaCard } from '../../shared/components/asana-card/asana-card';
import { YogaCategory, YogaPose } from '../../shared/interfaces/yoga.interface';

@Component({
  selector: 'app-categories',
  imports: [SidePanel, AsanaCard],
  templateUrl: './categories.component.html',
})
export default class CategoriesComponent {
  private readonly yogasvc = inject(YogaService)
  arrayCategoriesName = signal<string[]>([
    "Core Yoga",
    "Seated Yoga",
    "Strengthening Yoga",
    "Chest Opening Yoga",
    "Backbend Yoga",
    "Forward Bend Yoga",
    "Hip Opening Yoga",
    "Standing Yoga",
    "Restorative Yoga",
    "Arm Balance Yoga",
    "Balancing Yoga",
    "Inversion Yoga"
  ]);

  categoryPoses = signal<YogaPose[]>([]);
  isLoading = signal<boolean>(false);

  selectedCategoryChange(selectedCategory: string) {
    this.isLoading.set(true);
    this.yogasvc.loadCategoryByName(selectedCategory).subscribe({
      next: (category: YogaCategory) => {
        this.categoryPoses.set(category.poses);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading category:', error);
        this.isLoading.set(false);
      }
    })
  }

}