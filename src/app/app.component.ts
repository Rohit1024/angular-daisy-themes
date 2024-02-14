import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { CardsComponent } from './components/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardsComponent],
  template: `<app-nav /><app-cards />`,
  styles: [],
})
export class AppComponent {
  title = 'angular-daisy-themes';
}
