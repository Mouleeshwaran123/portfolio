import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="aside" [class.open]="menuOpen">
      <div class="logo">
        <a href="#"><span>M</span>ouli</a>
      </div>
      <button class="menu-btn" (click)="toggleMenu()">☰</button>
      <nav>
        <ul class="nav-list">
          <li *ngFor="let item of navItems">
            <a [href]="item.href" [class.active]="activeSection === item.id" (click)="onNavClick(item.id)">
              <i [class]="'fas ' + item.icon"></i> {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .aside {
      width: 270px;
      background: var(--bg-black-100);
      position: fixed;
      left: 0; top: 0;
      padding: 30px;
      height: 100%;
      border-right: 1px solid var(--bg-black-50);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;
      transition: left 0.3s ease;
    }
    .logo {
      position: absolute;
      top: 50px;
      font-size: 30px;
    }
    .logo a {
      color: var(--text-black-900);
      font-weight: 700;
      padding: 15px 20px;
      font-size: 30px;
      letter-spacing: 5px;
      position: relative;
      text-decoration: none;
    }
    .logo a span { font-size: 40px; color: var(--skin-color); }
    .logo a::before {
      content: ''; position: absolute;
      width: 20px; height: 20px;
      border-bottom: 5px solid var(--skin-color);
      border-left: 5px solid var(--skin-color);
      bottom: 0; left: 0;
    }
    .logo a::after {
      content: ''; position: absolute;
      width: 20px; height: 20px;
      border-top: 5px solid var(--skin-color);
      border-right: 5px solid var(--skin-color);
      top: 0; right: 0;
    }
    .nav-list { list-style: none; margin-top: 50px; padding: 0; }
    .nav-list li { margin-bottom: 20px; }
    .nav-list li a {
      font-size: 16px; font-weight: 600;
      display: block; color: var(--text-black-900);
      padding: 5px 15px; text-decoration: none;
      transition: all 0.3s ease; border-radius: 5px;
    }
    .nav-list li a i { margin-right: 10px; }
    .nav-list li a.active, .nav-list li a:hover {
      color: var(--skin-color);
    }
    .menu-btn {
      display: none; background: none; border: none;
      font-size: 24px; cursor: pointer; padding: 10px;
      color: var(--text-black-900);
    }
    @media (max-width: 1199px) {
      .aside { left: -270px; }
      .aside.open { left: 0; }
      .menu-btn {
        display: block; position: fixed;
        top: 10px; left: 10px; z-index: 1001;
        background: var(--bg-black-100);
        border-radius: 5px; border: 1px solid var(--bg-black-50);
      }
    }
  `]
})
export class NavbarComponent {
  @Input() isDarkMode = false;
  menuOpen = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', href: '#home', icon: 'fa-home', label: 'Home' },
    { id: 'about', href: '#about', icon: 'fa-user', label: 'About' },
    { id: 'service', href: '#service', icon: 'fa-list', label: 'Services' },
    { id: 'portfolio', href: '#portfolio', icon: 'fa-briefcase', label: 'Portfolio' },
    { id: 'contact', href: '#contact', icon: 'fa-comments', label: 'Contact' },
  ];

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  onNavClick(id: string) {
    this.activeSection = id;
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const aside = document.querySelector('.aside');
    const menuBtn = document.querySelector('.menu-btn');
    if (aside && menuBtn &&
        !aside.contains(event.target as Node) &&
        !menuBtn.contains(event.target as Node)) {
      this.menuOpen = false;
    }
  }
}
