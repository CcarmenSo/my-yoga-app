import { Component, input } from '@angular/core';
import { YogaPose } from '../../interfaces/yoga.interface';

@Component({
  selector: 'app-asana-card',
  imports: [],
  templateUrl: './asana-card.html',
})
export class AsanaCard {
  pose = input<YogaPose>();

  ngOninit() {
    console.log(this.pose());
  }

}
