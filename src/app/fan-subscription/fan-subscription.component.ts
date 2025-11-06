import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-fan-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="fan-register-section bg-primary text-light p-2">
      <div class="container">
        <div class="d-md-flex justify-content-between align-items-between">
          <h2 class="mb-3 mb-md-0">Register as a fan of Daniel</h2>
          <div class="input-group email-input">
            <input 
              type="email" 
              class="form-control" 
              [(ngModel)]="emailAddress"
              placeholder="Enter email address" 
              aria-label="Email address of person"
              aria-describedby="button-email">
            <button 
              class="btn btn-dark btn-lg" 
              type="button" 
              (click)="becomeFan()"
              id="button-email">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FanSubscriptionComponent {
  private emailService = inject(EmailService);
  emailAddress: string = '';

  async becomeFan() {
    if (!this.emailAddress || !this.isValidEmail(this.emailAddress)) {
      alert("You have entered an invalid email address!");
      return;
    }

    const success = await this.emailService.sendFanSubscription(this.emailAddress);
    
    if (success) {
      alert("Your fan subscription has been sent to Daniel successfully!");
      this.emailAddress = ''; // Clear the input
    } else {
      alert("There was an error sending your subscription. Please try again.");
    }
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(String(email).toLowerCase());
  }
}
