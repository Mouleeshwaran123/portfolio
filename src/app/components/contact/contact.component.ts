import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact section" id="contact">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 class="contact-title padd-15">Have Any Questions?</h3>
        <h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>

        <!-- Contact Info Cards -->
        <div class="row">
          <div class="contact-info-item padd-15" *ngFor="let info of contactInfo">
            <div class="icon"><i [class]="'fas ' + info.icon"></i></div>
            <h4>{{ info.label }}</h4>
            <p *ngIf="!info.link">{{ info.value }}</p>
            <a *ngIf="info.link" [href]="info.link" target="_blank"><p>{{ info.value }}</p></a>
          </div>
        </div>

        <h3 class="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 class="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>

        <!-- Contact Form -->
        <div class="row">
          <div class="contact-form padd-15">
            <form [formGroup]="contactForm" (ngSubmit)="submitForm()" novalidate>
              <div class="row">
                <!-- Name -->
                <div class="form-item col-6 padd-15">
                  <div class="form-group" [class.has-error]="isInvalid('name')">
                    <input
                      type="text"
                      formControlName="name"
                      class="form-control"
                      placeholder="Name"
                      [class.input-error]="isInvalid('name')"
                    >
                    <span class="error-msg" *ngIf="isInvalid('name')">
                      <i class="fas fa-exclamation-circle"></i>
                      <ng-container *ngIf="f['name'].errors?.['required']">Name is required.</ng-container>
                      <ng-container *ngIf="f['name'].errors?.['minlength']">At least 2 characters.</ng-container>
                    </span>
                  </div>
                </div>
                <!-- Email -->
                <div class="form-item col-6 padd-15">
                  <div class="form-group" [class.has-error]="isInvalid('email')">
                    <input
                      type="email"
                      formControlName="email"
                      class="form-control"
                      placeholder="Email"
                      [class.input-error]="isInvalid('email')"
                    >
                    <span class="error-msg" *ngIf="isInvalid('email')">
                      <i class="fas fa-exclamation-circle"></i>
                      <ng-container *ngIf="f['email'].errors?.['required']">Email is required.</ng-container>
                      <ng-container *ngIf="f['email'].errors?.['email']">Enter a valid email.</ng-container>
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- Subject -->
                <div class="form-item col-12 padd-15">
                  <div class="form-group" [class.has-error]="isInvalid('subject')">
                    <input
                      type="text"
                      formControlName="subject"
                      class="form-control"
                      placeholder="Subject"
                      [class.input-error]="isInvalid('subject')"
                    >
                    <span class="error-msg" *ngIf="isInvalid('subject')">
                      <i class="fas fa-exclamation-circle"></i>
                      Subject is required.
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- Message -->
                <div class="form-item col-12 padd-15">
                  <div class="form-group" [class.has-error]="isInvalid('message')">
                    <textarea
                      formControlName="message"
                      class="form-control"
                      placeholder="Message"
                      [class.input-error]="isInvalid('message')"
                    ></textarea>
                    <span class="error-msg" *ngIf="isInvalid('message')">
                      <i class="fas fa-exclamation-circle"></i>
                      <ng-container *ngIf="f['message'].errors?.['required']">Message is required.</ng-container>
                      <ng-container *ngIf="f['message'].errors?.['minlength']">At least 10 characters.</ng-container>
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="form-item col-12 padd-15">
                  <button type="submit" class="btn" [disabled]="sending">
                    <span *ngIf="!sending">
                      <i class="fas fa-paper-plane"></i> Send Message
                    </span>
                    <span *ngIf="sending" class="sending-dots">
                      Sending<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast Notification -->
    <div class="toast-wrapper" [class.show]="toastVisible">
      <div class="toast" [class.toast-success]="toastType === 'success'" [class.toast-error]="toastType === 'error'">
        <div class="toast-icon">
          <i class="fas" [class.fa-check-circle]="toastType === 'success'" [class.fa-times-circle]="toastType === 'error'"></i>
        </div>
        <div class="toast-body">
          <p class="toast-title">{{ toastType === 'success' ? 'Message Sent!' : 'Failed to Send' }}</p>
          <p class="toast-text">{{ toastMessage }}</p>
        </div>
        <button class="toast-close" (click)="closeToast()">
          <i class="fas fa-times"></i>
        </button>
        <div class="toast-progress" [class.animate]="toastVisible"></div>
      </div>
    </div>
  `,
  styles: [`
    /* ===== Section ===== */
    .contact { background: var(--bg-black-900); }
    .contact-title { font-size: 22px; font-weight: 700; color: var(--text-black-900); padding: 10px 15px 5px; }
    .contact-sub-title { font-size: 14px; color: var(--text-black-700); padding: 0 15px 25px; letter-spacing: 1px; }

    /* ===== Contact Info Cards ===== */
    .contact-info-item {
      flex: 0 0 33.33%; max-width: 33.33%;
      text-align: center; padding: 30px 15px;
      transition: transform 0.3s ease;
    }
    .contact-info-item:hover { transform: translateY(-6px); }

    .icon {
      width: 60px; height: 60px; border-radius: 50%;
      background: var(--skin-color); margin: 0 auto 15px;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .contact-info-item:hover .icon {
      transform: scale(1.15) rotate(8deg);
      box-shadow: 0 8px 24px rgba(236,24,57,0.45);
    }
    .icon i { font-size: 22px; color: #fff; }
    .contact-info-item h4 {
      font-size: 16px; font-weight: 700; color: var(--text-black-900);
      margin-bottom: 8px; transition: color 0.3s ease;
    }
    .contact-info-item:hover h4 { color: var(--skin-color); }
    .contact-info-item p { font-size: 14px; color: var(--text-black-700); }
    .contact-info-item a { text-decoration: none; }

    /* ===== Form layout ===== */
    .contact-form { flex: 0 0 100%; max-width: 100%; }
    .col-6 { flex: 0 0 50%; max-width: 50%; }
    .col-12 { flex: 0 0 100%; max-width: 100%; }
    .form-group { margin-bottom: 8px; position: relative; }

    /* ===== Inputs ===== */
    .form-control {
      width: 100%; height: 50px; border-radius: 25px;
      background: var(--bg-black-100);
      border: 1.5px solid var(--bg-black-50);
      padding: 10px 25px; font-size: 15px;
      color: var(--text-black-700);
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
      outline: none;
      box-sizing: border-box;
    }
    .form-control:focus {
      box-shadow: 0 0 20px rgba(236,24,57,0.15);
      border-color: var(--skin-color);
      transform: translateY(-2px);
    }
    .form-control:hover:not(:focus) {
      border-color: color-mix(in srgb, var(--skin-color) 50%, transparent);
    }
    .form-control.input-error {
      border-color: #e74c3c;
      box-shadow: 0 0 10px rgba(231,76,60,0.2);
      animation: shake 0.35s ease;
    }
    textarea.form-control {
      height: 140px; resize: none;
      padding-top: 15px; border-radius: 15px;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-6px); }
      40%       { transform: translateX(6px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }

    /* ===== Error messages ===== */
    .error-msg {
      display: flex; align-items: center; gap: 5px;
      color: #e74c3c; font-size: 12px; font-weight: 500;
      margin-top: 6px; padding-left: 12px;
      animation: fadeInDown 0.25s ease;
    }
    .error-msg i { font-size: 12px; flex-shrink: 0; }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ===== Button ===== */
    .btn {
      padding: 14px 50px; background: var(--skin-color);
      color: #fff; border: none; border-radius: 40px;
      font-size: 15px; font-weight: 600; cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      margin-top: 10px; display: inline-flex;
      align-items: center; gap: 8px;
    }
    .btn:hover:not(:disabled) {
      transform: scale(1.06);
      box-shadow: 0 6px 24px rgba(236,24,57,0.45);
    }
    .btn:active:not(:disabled) { transform: scale(0.97); }
    .btn:disabled { opacity: 0.65; cursor: not-allowed; }

    /* Sending dots animation */
    .sending-dots .dot {
      display: inline-block;
      animation: blink 1.2s infinite;
    }
    .sending-dots .dot:nth-child(2) { animation-delay: 0.2s; }
    .sending-dots .dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes blink {
      0%, 80%, 100% { opacity: 0; }
      40%            { opacity: 1; }
    }

    /* ===== Toast ===== */
    .toast-wrapper {
      position: fixed; bottom: 30px; right: 30px;
      z-index: 9999;
      pointer-events: none; opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.35s ease, transform 0.35s ease;
    }
    .toast-wrapper.show {
      opacity: 1; transform: translateY(0);
      pointer-events: all;
    }
    .toast {
      display: flex; align-items: flex-start; gap: 14px;
      min-width: 300px; max-width: 360px;
      background: var(--bg-black-100);
      border-radius: 14px; padding: 18px 18px 22px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.25);
      position: relative; overflow: hidden;
      border-left: 4px solid transparent;
    }
    .toast-success { border-left-color: #28a745; }
    .toast-error   { border-left-color: #e74c3c; }

    .toast-icon { flex-shrink: 0; margin-top: 2px; }
    .toast-icon i { font-size: 22px; }
    .toast-success .toast-icon i { color: #28a745; }
    .toast-error   .toast-icon i { color: #e74c3c; }

    .toast-body { flex: 1; }
    .toast-title {
      font-size: 15px; font-weight: 700;
      color: var(--text-black-900); margin: 0 0 4px;
    }
    .toast-text {
      font-size: 13px; color: var(--text-black-700); margin: 0;
    }

    .toast-close {
      background: none; border: none; cursor: pointer;
      color: var(--text-black-700); padding: 0; font-size: 14px;
      flex-shrink: 0; margin-top: 2px;
      transition: color 0.2s ease;
    }
    .toast-close:hover { color: var(--skin-color); }

    /* Auto-dismiss progress bar */
    .toast-progress {
      position: absolute; bottom: 0; left: 0;
      height: 4px; width: 100%;
      background: var(--skin-color); border-radius: 0 0 14px 14px;
      transform-origin: left;
      transform: scaleX(0);
    }
    .toast-success .toast-progress { background: #28a745; }
    .toast-error   .toast-progress { background: #e74c3c; }

    .toast-progress.animate {
      animation: toastBar 4s linear forwards;
    }
    @keyframes toastBar {
      from { transform: scaleX(1); }
      to   { transform: scaleX(0); }
    }

    /* ===== Responsive ===== */
    @media (max-width: 991px) {
      .contact-info-item { flex: 0 0 50%; max-width: 50%; }
    }

    @media (max-width: 767px) {
      .contact-info-item { flex: 0 0 100%; max-width: 100%; }
      .col-6 { flex: 0 0 100%; max-width: 100%; }
    }

    @media (max-width: 480px) {
      .contact-title { font-size: 18px; padding: 8px 15px 4px; }
      .contact-sub-title { font-size: 12px; padding: 0 15px 18px; }
      .contact-info-item { padding: 20px 15px; }
      .icon { width: 50px; height: 50px; }
      .icon i { font-size: 18px; }
      .btn { width: 100%; padding: 14px 30px; justify-content: center; }
      .toast-wrapper { bottom: 16px; right: 16px; left: 16px; }
      .toast { min-width: unset; max-width: 100%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .form-control, .btn, .icon, .contact-info-item,
      .toast-wrapper, .toast-progress { transition: none; animation: none; }
      .form-control.input-error { animation: none; }
    }
  `]
})
export class ContactComponent {

  contactForm: FormGroup;
  sending = false;
  toastVisible = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage = '';
  private toastTimer: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.contactForm.controls; }

  isInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  submitForm(): void {
    // Mark all fields as touched to trigger validation display
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.sending = true;

    // Simulate API call — replace with real HttpClient call
    setTimeout(() => {
      this.sending = false;
      const success = true; // flip to false to test error toast

      if (success) {
        this.contactForm.reset();
        this.showToast('success', 'Your message has been sent. I\'ll get back to you soon!');
      } else {
        this.showToast('error', 'Something went wrong. Please try again later.');
      }
    }, 1800);
  }

  showToast(type: 'success' | 'error', message: string): void {
    clearTimeout(this.toastTimer);
    this.toastType = type;
    this.toastMessage = message;
    this.toastVisible = false;

    // Tiny delay so re-triggering restarts the progress bar animation
    setTimeout(() => {
      this.toastVisible = true;
      this.toastTimer = setTimeout(() => this.closeToast(), 4000);
    }, 50);
  }

  closeToast(): void {
    this.toastVisible = false;
    clearTimeout(this.toastTimer);
  }

  contactInfo = [
    { icon: 'fa-phone',    label: 'Call Us On', value: '+91 97897-82760',               link: null },
    { icon: 'fa-envelope', label: 'Email',       value: 'mouleeshslm26@gmail.com',       link: 'mailto:mouleeshslm26@gmail.com' },
    { icon: 'fa-globe',    label: 'LinkedIn',    value: 'linkedin.com/in/mouleeshwaran-g', link: 'https://www.linkedin.com/in/mouleeshwaran-g' },
  ];
}