import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="service section" id="service">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div class="row services-grid">
          <div class="service-item" *ngFor="let svc of services; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="service-item-inner">
              <div class="icon">
                <i [class]="'fas ' + svc.icon"></i>
              </div>
              <h4>{{ svc.title }}</h4>
              <p>{{ svc.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .service { background: var(--bg-black-900); }
    .services-grid { display: flex; flex-wrap: wrap; }

    .service-item {
      flex: 0 0 33.33%; max-width: 33.33%;
      padding: 15px;
      animation: fadeInUp 0.6s ease both;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .service-item-inner {
      background: var(--bg-black-100);
      border: 1px solid var(--bg-black-50);
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .service-item-inner:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(236,24,57,0.15);
      border-color: var(--skin-color);
    }
    .service-item-inner:hover .icon {
      background: var(--skin-color);
    }
    .service-item-inner:hover .icon i {
      color: #fff;
    }

    .icon {
      width: 60px; height: 60px;
      border-radius: 50%;
      background: var(--bg-black-50);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px;
      transition: all 0.3s ease;
      flex-shrink: 0;
    }
    .icon i { font-size: 22px; color: var(--skin-color); transition: all 0.3s ease; }

    h4 {
      font-size: 17px; font-weight: 700;
      color: var(--text-black-900); margin-bottom: 12px;
    }
    p { font-size: 14px; color: var(--text-black-700); line-height: 1.7; }

    /* ===== Large desktops (≥1400px) ===== */
    @media (min-width: 1400px) {
      .service-item-inner { padding: 35px 30px; }
    }

    /* ===== Laptops / small desktops (≤1199px) ===== */
    @media (max-width: 1199px) {
      .service-item-inner { padding: 25px 20px; }
    }

    /* ===== Tablets (≤991px) ===== */
    @media (max-width: 991px) {
      .service-item { flex: 0 0 50%; max-width: 50%; }
    }

    /* ===== Large phones (≤767px) ===== */
    @media (max-width: 767px) {
      .service-item { flex: 0 0 100%; max-width: 100%; }
      .service-item-inner { padding: 25px 20px; }
    }

    /* ===== Small phones (≤480px) ===== */
    @media (max-width: 480px) {
      .service-item { padding: 10px; }
      .service-item-inner { padding: 20px 15px; }
      .icon { width: 50px; height: 50px; margin-bottom: 15px; }
      .icon i { font-size: 18px; }
      h4 { font-size: 16px; }
      p { font-size: 13px; }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-cogs',
      title: 'Java Application Development',
      desc: 'Strong foundation in Java with 1+ year experience using Swing and JDBC to build efficient, scalable desktop and enterprise applications.'
    },
    {
      icon: 'fa-database',
      title: 'Database Design & Management',
      desc: 'Experienced in MySQL — designing normalized schemas, optimizing queries, and managing databases for smooth, high-performance data operations.'
    },
    {
      icon: 'fa-code',
      title: 'Web Application Development',
      desc: 'Building dynamic web applications using JSP, Servlets, and PHP with clean, secure, and maintainable code following best practices.'
    },
    {
      icon: 'fa-paint-brush',
      title: 'Front-End Development',
      desc: 'Creating interactive, responsive UIs with HTML, CSS, JavaScript, and Angular. Focused on accessibility and great user experiences across all devices.'
    },
    {
      icon: 'fa-server',
      title: 'Back-End Development',
      desc: 'Developing secure, scalable back-end solutions using Java, PHP, and MySQL. Ensuring seamless database integration and optimized server-side logic.'
    },
    {
      icon: 'fa-globe',
      title: 'Custom Web Solutions',
      desc: 'Delivering tailored full-stack web development solutions from concept to deployment — built to meet your specific business requirements.'
    },
  ];
}