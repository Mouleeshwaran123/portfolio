import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="Portfolio section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>
        <div class="row projects-grid">
          <div class="Portfolio-item padd-15" *ngFor="let project of projects; let i = index"
               [style.animation-delay]="(i * 0.12) + 's'"
               (click)="toggleOptions(project)">
            <div class="Portfolio-item-inner shadow-dark">

              <!-- Image / Icon area -->
              <div class="Portfolio-img">
                <div class="project-icon">
                  <i [class]="'fas ' + project.icon"></i>
                </div>

                <!-- Hover tag badge -->
                <span class="project-tag">{{ project.tag }}</span>

                <!-- Overlay links -->
                <div class="overlay" [class.visible]="project.showOptions">
                  <a [href]="project.demo" target="_blank" (click)="$event.stopPropagation()" class="overlay-btn">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a [href]="project.github" target="_blank" (click)="$event.stopPropagation()" class="overlay-btn">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>

              <!-- Info footer -->
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.tech }}</p>
                <div class="project-arrow">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== Section ===== */
    .Portfolio {
      background: var(--bg-black-900);
      padding-top: 60px; /* top space */
    }

    .projects-grid { display: flex; flex-wrap: wrap; margin-top: 10px; }

    /* ===== Card wrapper ===== */
    .Portfolio-item {
      flex: 0 0 33.33%; max-width: 33.33%;
      cursor: pointer;
      animation: fadeInUp 0.6s ease both;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(35px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ===== Card inner ===== */
    .Portfolio-item-inner {
      background: var(--bg-black-100);
      border-radius: 14px; overflow: hidden;
      border: 1px solid var(--bg-black-50);
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
      position: relative;
    }
    .Portfolio-item-inner:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 45px rgba(0,0,0,0.22);
      border-color: var(--skin-color);
    }

    /* ===== Gradient image area ===== */
    .Portfolio-img {
      position: relative; height: 190px;
      background: linear-gradient(135deg, var(--skin-color) 0%, #7a001a 100%);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }

    /* Animated shine sweep on hover */
    .Portfolio-img::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
      transform: translateX(-100%);
      transition: transform 0.55s ease;
    }
    .Portfolio-item-inner:hover .Portfolio-img::after {
      transform: translateX(100%);
    }

    /* ===== Project icon ===== */
    .project-icon i {
      font-size: 62px;
      color: rgba(255,255,255,0.25);
      transition: transform 0.4s ease, color 0.4s ease, font-size 0.4s ease;
    }
    .Portfolio-item-inner:hover .project-icon i {
      transform: scale(1.18) rotate(-6deg);
      color: rgba(255,255,255,0.5);
    }

    /* ===== Tag badge ===== */
    .project-tag {
      position: absolute; top: 14px; left: 14px;
      background: rgba(0,0,0,0.55);
      color: #fff; font-size: 11px; font-weight: 600;
      padding: 4px 10px; border-radius: 20px;
      letter-spacing: 0.5px; backdrop-filter: blur(4px);
      opacity: 0; transform: translateY(-6px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index:1;
    }
    .Portfolio-item-inner:hover .project-tag {
      opacity: 1; transform: translateY(0);
    }

    /* ===== Overlay ===== */
    .overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.82);
      display: flex; align-items: center; justify-content: center;
      gap: 14px; opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .overlay.visible,
    .Portfolio-item-inner:hover .overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .overlay-btn {
      padding: 10px 20px;
      background: var(--skin-color);
      color: #fff; border-radius: 25px; text-decoration: none;
      font-size: 13px; font-weight: 600;
      display: flex; align-items: center; gap: 7px;
      white-space: nowrap;
      transform: translateY(12px); opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease,
                  background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
    }
    .overlay.visible .overlay-btn,
    .Portfolio-item-inner:hover .overlay .overlay-btn {
      transform: translateY(0); opacity: 1;
    }
    /* Stagger the two buttons */
    .overlay-btn:nth-child(2) {
      transition-delay: 0.07s;
    }
    .overlay-btn:hover {
      background: #fff;
      color: var(--skin-color);
      box-shadow: 0 4px 14px rgba(255,255,255,0.2);
    }

    /* ===== Info footer ===== */
    .project-info {
      padding: 18px 20px 16px;
      display: flex; flex-direction: column; gap: 4px;
      position: relative;
    }
    .project-info h3 {
      font-size: 16px; font-weight: 700;
      color: var(--text-black-900); margin: 0;
      transition: color 0.3s ease;
    }
    .Portfolio-item-inner:hover .project-info h3 {
      color: var(--skin-color);
    }
    .project-info p {
      font-size: 13px; color: var(--skin-color);
      font-weight: 500; margin: 0;
    }

    /* Arrow icon — slides in from left on hover */
    .project-arrow {
      position: absolute; right: 18px; bottom: 16px;
      width: 30px; height: 30px; border-radius: 50%;
      background: var(--skin-color);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transform: translateX(-8px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    .project-arrow i { font-size: 13px; color: #fff; }
    .Portfolio-item-inner:hover .project-arrow {
      opacity: 1; transform: translateX(0);
    }

    /* ===== Responsive ===== */
    @media (max-width: 1199px) {
      .Portfolio-img { height: 165px; }
      .project-icon i { font-size: 52px; }
    }

    @media (max-width: 991px) {
      .Portfolio-item { flex: 0 0 50%; max-width: 50%; }
    }

    @media (max-width: 767px) {
      .Portfolio { padding-top: 40px; }
      .Portfolio-img { height: 155px; }
      .overlay { gap: 10px; }
      .overlay-btn { padding: 8px 14px; font-size: 12px; }
    }

    @media (max-width: 480px) {
      .Portfolio { padding-top: 30px; }
      .Portfolio-item { flex: 0 0 100%; max-width: 100%; }
      .Portfolio-img { height: 145px; }
      .project-icon i { font-size: 46px; }
      .overlay { flex-direction: column; gap: 10px; }
      .overlay-btn { width: 65%; justify-content: center; }
      .project-info { padding: 14px 16px 14px; }
      .project-info h3 { font-size: 15px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .Portfolio-item-inner,
      .Portfolio-img::after,
      .project-icon i,
      .project-tag,
      .overlay,
      .overlay-btn,
      .project-arrow,
      .project-info h3 {
        transition: none; animation: none;
      }
    }
  `]
})
export class PortfolioComponent {
  projects: any[] = [
    {
      title: 'College Website Chatbot',
      tech: 'HTML · CSS · JavaScript · MySQL',
      icon: 'fa-robot',
      tag: 'Web',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123/College-Chatbot-System',
      showOptions: false
    },
    {
      title: 'Payroll Calculation System',
      tech: 'Java · Swing · JDBC · MySQL',
      icon: 'fa-calculator',
      tag: 'Java',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123',
      showOptions: false
    },
    {
      title: 'Digital Clock Design',
      tech: 'HTML5 · CSS3 · JavaScript',
      icon: 'fa-clock',
      tag: 'Frontend',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123',
      showOptions: false
    },
    {
      title: 'Inventory Management System',
      tech: 'Java · MySQL · Swing',
      icon: 'fa-boxes',
      tag: 'Java',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123',
      showOptions: false
    },
    {
      title: 'Portfolio Website',
      tech: 'Angular · TypeScript · CSS',
      icon: 'fa-laptop-code',
      tag: 'Angular',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123',
      showOptions: false
    },
    {
      title: 'Full Stack Web App',
      tech: 'Java · JSP · Servlet · MySQL',
      icon: 'fa-project-diagram',
      tag: 'Full Stack',
      demo: 'https://your-live-demo-url.com',
      github: 'https://github.com/Mouleeshwaran123',
      showOptions: false
    },
  ];

  toggleOptions(project: any) {
    this.projects.forEach(p => { if (p !== project) p.showOptions = false; });
    project.showOptions = !project.showOptions;
  }
}