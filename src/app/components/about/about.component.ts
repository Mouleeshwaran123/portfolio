import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section" id="about">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div class="row">
          <div class="about-content padd-15">
            <!-- About Text -->
            <div class="row">
              <div class="about-text">
                <h3>I'm Mouleeshwaran G — <span>Angular Developer</span></h3>
                <p>A passionate software developer with 1+ year of hands-on experience in Java, HTML, CSS, JavaScript, PHP, and MySQL. I build efficient, user-friendly applications and continuously sharpen my skills to tackle full-stack challenges head-on.</p>
              </div>
            </div>
            <!-- Personal Info + Skills -->
            <div class="row">
              <div class="personal-info padd-15">
                <div class="row">
                  <div class="info-item padd-15" *ngFor="let info of personalInfo">
                    <p>{{ info.label }} : <span>
                      <a *ngIf="info.link; else plain" [href]="info.link" target="_blank">{{ info.value }}</a>
                      <ng-template #plain>{{ info.value }}</ng-template>
                    </span></p>
                  </div>
                </div>
                <div class="row">
                  <div class="buttons padd-15">
                    <a href="assets/Resume_Update.pdf" download class="btn">Download CV</a>
                  </div>
                </div>
              </div>
              <div class="skills padd-15">
                <div class="row">
                  <div class="skill-item padd-15" *ngFor="let skill of skills">
                    <h5>{{ skill.name }}</h5>
                    <div class="progress">
                      <div class="progress-in" [style.width.%]="skill.level"></div>
                      <div class="skill-percent">{{ skill.level }}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Education + Experience -->
            <div class="row edu-exp-row">
              <div class="education padd-15">
                <h3 class="title">Education</h3>
                <div class="row timeline-row">
                  <div class="timeline-box padd-15">
                    <div class="timeline shadow-dark">
                      <div class="timeline-item" *ngFor="let edu of education">
                        <div class="circle-dot"></div>
                        <h3 class="timeline-date"><i class="fas fa-calendar"></i> {{ edu.period }}</h3>
                        <h4 class="timeline-title">{{ edu.degree }}</h4>
                        <p class="timeline-text"><b>{{ edu.institution }}</b> — {{ edu.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="experience padd-15">
                <h3 class="title">Experience</h3>
                <div class="row timeline-row">
                  <div class="timeline-box padd-15">
                    <div class="timeline shadow-dark">
                      <div class="timeline-item" *ngFor="let exp of experience">
                        <div class="circle-dot"></div>
                        <h3 class="timeline-date"><i class="fas fa-calendar"></i> {{ exp.period }}</h3>
                        <h4 class="timeline-title">{{ exp.role }}</h4>
                        <p class="timeline-text"><b>{{ exp.company }}:</b> {{ exp.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about { background: var(--bg-black-900); color: var(--text-black-900); }
    .about-text { flex: 0 0 100%; max-width: 100%; }
    .about-text h3 { font-size: 24px; margin-bottom: 15px; font-weight: 700; color: var(--text-black-900); }
    .about-text h3 span { color: var(--skin-color); }
    .about-text p { font-size: 16px; line-height: 1.8; color: var(--text-black-700); }

    .personal-info { flex: 0 0 50%; max-width: 50%; margin-top: 40px; }
    .info-item { flex: 0 0 50%; max-width: 50%; margin-top: 20px; }
    .info-item p {
      font-weight: 600; padding: 10px 0; font-size: 15px;
      color: var(--text-black-900);
      border-bottom: 1px solid var(--bg-black-50);
    }
    .info-item p span { font-weight: 400; color: var(--text-black-700); margin-left: 4px; }
    .info-item p span a { color: var(--skin-color); text-decoration: none; }
    .info-item p span a:hover { text-decoration: underline; }

    .skills { flex: 0 0 50%; max-width: 50%; margin-top: 40px; }
    .skill-item { flex: 0 0 100%; max-width: 100%; margin-bottom: 25px; }
    .skill-item h5 { font-weight: 600; font-size: 15px; color: var(--text-black-900); line-height: 40px; }
    .progress { background: var(--bg-black-50); height: 7px; border-radius: 4px; position: relative; }
    .progress-in {
      background: var(--skin-color); height: 100%; border-radius: 4px;
      width: 0; transition: width 1.5s ease;
      animation: growBar 1.5s ease forwards;
    }
    @keyframes growBar { from { width: 0; } }
    .skill-percent {
      position: absolute; right: 0; top: -30px;
      font-size: 14px; font-weight: 600; color: var(--text-black-900);
    }

    /* ===== Equal-height Education + Experience row ===== */
    .edu-exp-row {
      align-items: stretch;
    }

    .education, .experience {
      flex: 0 0 50%;
      max-width: 50%;
      display: flex;
      flex-direction: column;
    }

    .title { font-size: 22px; font-weight: 700; color: var(--text-black-900); margin-bottom: 20px; }

    /* Make timeline-row and timeline-box stretch to fill available height */
    .timeline-row {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .timeline-box {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    /* ===== Timeline ===== */
    .timeline {
      background: var(--bg-black-100);
      padding: 30px 30px 30px 70px;
      border-radius: 10px;
      position: relative;
      flex: 1; /* fills full height so both cards match */
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    /* Hover lift on the whole card */
    .timeline:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 34px;
      top: 30px;
      bottom: 30px;
      width: 2px;
      background: var(--bg-black-50);
      transition: background 0.3s ease;
    }

    .timeline:hover::before {
      background: var(--skin-color);
    }

    /* ===== Timeline items with hover ===== */
    .timeline-item {
      position: relative;
      margin-bottom: 30px;
      padding: 14px 14px 14px 10px;
      border-radius: 8px;
      transition: background 0.3s ease, transform 0.3s ease;
      cursor: default;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-item:hover {
      background: var(--bg-black-50);
      transform: translateX(5px);
    }

    /* Circle dot */
    .circle-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--skin-color);
      position: absolute;
      left: -43px;
      top: 20px; /* shifted down to align inside padded item */
      border: 3px solid var(--bg-black-100);
      box-shadow: 0 0 0 3px var(--skin-color);
      z-index: 1;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .timeline-item:hover .circle-dot {
      transform: scale(1.35);
      box-shadow: 0 0 0 4px var(--skin-color), 0 0 12px rgba(236, 24, 57, 0.45);
    }

    .timeline-date {
      font-size: 14px;
      font-weight: 600;
      color: var(--skin-color);
      margin-bottom: 8px;
      transition: letter-spacing 0.3s ease;
    }
    .timeline-date i { margin-right: 6px; }

    .timeline-item:hover .timeline-date {
      letter-spacing: 0.4px;
    }

    .timeline-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--text-black-900);
      margin-bottom: 8px;
      transition: color 0.3s ease;
    }

    .timeline-item:hover .timeline-title {
      color: var(--skin-color);
    }

    .timeline-text { font-size: 14px; color: var(--text-black-700); line-height: 1.7; }

    .buttons { margin-top: 20px; }
    .btn {
      display: inline-block; padding: 12px 35px;
      background: var(--skin-color); color: #fff;
      border-radius: 40px; text-decoration: none;
      font-weight: 600; transition: all 0.3s ease; margin-top: 10px;
    }
    .btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(236,24,57,0.4); }

    /* ===== Large tablets / small desktops (≤1199px) ===== */
    @media (max-width: 1199px) {
      .timeline { padding: 28px 20px 28px 70px; }
    }

    /* ===== Tablets (≤991px) ===== */
    @media (max-width: 991px) {
      .education, .experience {
        flex: 0 0 100%;
        max-width: 100%;
      }
      .experience { margin-top: 40px; }
    }

    /* ===== Large phones / small tablets (≤767px) ===== */
    @media (max-width: 767px) {
      .personal-info, .skills, .education, .experience {
        flex: 0 0 100%;
        max-width: 100%;
      }
      .info-item { flex: 0 0 100%; max-width: 100%; }

      .about-text h3 { font-size: 20px; }

      .timeline { padding: 25px 20px 25px 55px; }
      .timeline::before { left: 20px; }
      .circle-dot { left: -42px; }

      /* Disable translateX hover on small screens (layout breaks) */
      .timeline-item:hover { transform: none; }
    }

    /* ===== Small phones (≤480px) ===== */
    @media (max-width: 480px) {
      .about-text h3 { font-size: 18px; }
      .about-text p { font-size: 14px; }

      .title { font-size: 18px; }

      .timeline { padding: 20px 15px 20px 45px; }
      .timeline::before { left: 14px; }
      .circle-dot { width: 12px; height: 12px; left: -36px; top: 22px; }

      .timeline-date { font-size: 12px; }
      .timeline-title { font-size: 15px; }
      .timeline-text { font-size: 13px; }
    }

    /* ===== Reduced motion ===== */
    @media (prefers-reduced-motion: reduce) {
      .timeline, .timeline-item, .circle-dot, .timeline-title, .timeline-date {
        transition: none;
        animation: none;
      }
      .timeline:hover { transform: none; }
      .timeline-item:hover { transform: none; }
    }
  `]
})
export class AboutComponent {
  personalInfo = [
    { label: 'Phone', value: '+91 97897-82760', link: null },
    { label: 'Degree', value: 'M.Sc Computer Science', link: null },
    { label: 'Experience', value: '1+ Year', link: null },
    { label: 'Freelance', value: 'Available', link: null },
    { label: 'LinkedIn', value: 'mouleeshwaran-g', link: 'https://www.linkedin.com/in/mouleeshwaran-g' },
    { label: 'GitHub', value: 'Mouleeshwaran123', link: 'https://github.com/Mouleeshwaran123' },
  ];

  skills = [
    { name: 'Angular', level: 96 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 78 },
    { name: 'Java Core', level: 70 },
  ];

  education = [
    {
      period: '2022 – 2024',
      degree: 'Master of Computer Science',
      institution: 'Government Arts College (Autonomous), Salem',
      desc: 'Graduated with CGPA 7.6%. Gained advanced knowledge in computing, programming languages, and software development.'
    },
    {
      period: '2019 – 2022',
      degree: 'Bachelor of Computer Science',
      institution: 'Government Arts College (Autonomous), Salem',
      desc: 'Graduated with CGPA 7.7%. Built strong foundations in algorithms, databases, and software engineering.'
    },
    {
      period: '2018 – 2019',
      degree: 'Higher Secondary (Maths & Computer Science)',
      institution: 'Gokulanatha Hindu Maha Jana Hr. Sec. School, Salem',
      desc: 'Scored 63%. This sparked my passion for technology, problem-solving, and software development.'
    },
  ];

  experience = [
    {
      period: '2026 – Present',
      role: 'Angular Developer',
      company: 'WebPlatf',
      desc: 'Currently developing responsive web applications using Angular. Working on API integration, reusable components, form handling, routing, authentication, and performance optimization.'
    },
    {
      period: '2025 – 2026',
      role: 'Angular Developer',
      company: 'Macromed Technologies',
      desc: 'Worked on Angular-based applications with focus on UI development, component architecture, reactive forms, REST API integration, and responsive design implementation.'
    },
    {
      period: '2023 – 2024',
      role: 'Frontend Developer Trainee',
      company: 'Self Learning & Projects',
      desc: 'Built multiple frontend projects using Angular, TypeScript, HTML, CSS, and Bootstrap while improving problem-solving and web development skills.'
    },
  ];
}