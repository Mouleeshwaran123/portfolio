import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  template: `
    <div [class.dark-mode]="isDarkMode">
      <button class="dark-mode-toggle" (click)="toggleDarkMode()">
        <i class="fas" [ngClass]="isDarkMode ? 'fa-sun' : 'fa-moon'"></i>
      </button>
      <div class="main-container">
        <app-navbar [isDarkMode]="isDarkMode"></app-navbar>
        <div class="main-content">
          <app-home></app-home>
          <app-about></app-about>
          <app-services></app-services>
          <app-portfolio></app-portfolio>
          <app-contact></app-contact>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  isDarkMode = true;
  toggleDarkMode() { this.isDarkMode = !this.isDarkMode; }
}
