import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {


    pages: any[] = [
    {label: "Home", path: "home"},
    {label: "Asanas by categories", path: "categories"},
    {label: "Asanas by levels", path: "levels"},
    // {label: "Mi sesión", path: ""},
  ]


}
