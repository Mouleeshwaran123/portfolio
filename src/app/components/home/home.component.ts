import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home section" id="home">
      <div class="container">
        <div class="row">
          <div class="home-info padd-15 animate-fade-in-left">
            <h3 class="hello">Hello, my name is <span class="name">Mouleeshwaran G</span></h3>
            <h3 class="my-profession">I'm a <span class="typing">{{ displayText }}<span class="cursor">|</span></span></h3>
            <p>I am a skilled Angular Developer with 1+ year of experience building efficient, scalable, and user-friendly web applications. Specializing in Java, MySQL, and modern web technologies like HTML, CSS, JavaScript, and JSP, I focus on creating seamless user experiences and robust back-end functionality. I work effectively in collaborative team environments, always striving to deliver projects on time and to the highest standards.</p>
            <a href="#contact" class="btn hire-me">Hire Me</a>
          </div>
          <div class="home-img padd-15 animate-fade-in-right">
            <img src="assets/Background.jpeg" alt="Mouleeshwaran G" class="responsive-img">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .home {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: var(--bg-black-900);
      color: var(--text-black-900);
    }
    .home-info {
      flex: 0 0 60%; max-width: 60%;
    }
    .hello { font-size: 28px; margin: 15px 0; }
    .hello .name {
      font-size: 30px; font-weight: 700; color: var(--skin-color);
    }
    .my-profession { font-size: 30px; margin: 15px 0; }
    .typing { color: var(--skin-color); }
    .cursor { animation: blink 1s infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    .home-info p {
      margin: 20px 0 30px;
      font-size: 16px;
      color: var(--text-black-700);
      line-height: 1.8;
    }
    .home-img {
      flex: 0 0 40%; max-width: 40%;
      text-align: center; position: relative;
    }
    .home-img::before {
      content: ''; position: absolute;
      height: 100px; width: 100px;
      border-top: 10px solid var(--skin-color);
      border-left: 10px solid var(--skin-color);
      left: 5px; top: -25px;
    }
    .home-img::after {
      content: ''; position: absolute;
      height: 100px; width: 100px;
      border-bottom: 10px solid var(--skin-color);
      border-right: 10px solid var(--skin-color);
      right: 5px; bottom: -10px;
    }
    .responsive-img {
      max-width: 100%; border-radius: 5px;
      height: 400px; object-fit: cover;
      animation: float 4s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-fade-in-left {
      animation: fadeInLeft 0.8s ease forwards;
    }
    .animate-fade-in-right {
      animation: fadeInRight 0.8s ease 0.2s forwards;
      opacity: 0;
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .btn {
      display: inline-block; margin-top: 20px;
      padding: 12px 35px; background: var(--skin-color);
      color: #fff; border-radius: 40px; text-decoration: none;
      font-weight: 600; transition: all 0.3s ease;
    }
    .btn:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(236,24,57,0.4); }
    @media (max-width: 991px) {
      .home-info, .home-img { flex: 0 0 100%; max-width: 100%; }
      .home-img { margin-top: 30px; }
      .responsive-img { height: 300px; }
    }
    @media (max-width: 767px) {
      .hello { font-size: 22px; }
      .my-profession { font-size: 22px; }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  displayText = '';
  private professions = ['Angular Developer', 'Web Developer', 'Software Engineer', 'Frontend Developer'];
  private profIdx = 0;
  private charIdx = 0;
  private isDeleting = false;
  private timer: any;

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private type() {
    const current = this.professions[this.profIdx];
    if (this.isDeleting) {
      this.displayText = current.substring(0, --this.charIdx);
    } else {
      this.displayText = current.substring(0, ++this.charIdx);
    }
    let speed = this.isDeleting ? 50 : 100;
    if (!this.isDeleting && this.charIdx === current.length) {
      this.isDeleting = true; speed = 1000;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.profIdx = (this.profIdx + 1) % this.professions.length;
      speed = 500;
    }
    this.timer = setTimeout(() => this.type(), speed);
  }
}
