import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="nav nav-pills">
        <li class="nav-item active">
          <a class="nav-link" [routerLink]="['/welcome']">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Table de products dinamic';
}
