import { Component, inject } from '@angular/core';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-specialrequest',
  standalone: true,
  imports: [],
  templateUrl: './specialrequest.component.html',
  styleUrl: './specialrequest.component.css'
})
export class SpecialrequestComponent {
  private emailService = inject(EmailService);
  currentDate: string = this.getTodayDate();

  async sendRequest(_name: string, _email: string, _song: string, _msg: string) {
    // Validate required fields
    if (!_name || !_email || !_song) {
      alert("Please fill in all required fields (name, email, and song name)");
      return;
    }

    // Validate email format
    if (!this.isValidEmail(_email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log('Submitting special request:', { name: _name, email: _email, song: _song });

    try {
      const success = await this.emailService.sendSpecialRequest(_name, _email, _song, _msg || '');
      
      if (success) {
        alert("Your special request has been sent to Daniel successfully!");
        // Clear form fields
        this.clearForm();
      } else {
        alert("There was an error sending your request. Please check the console for details and try again.");
      }
    } catch (error) {
      console.error('Error in sendRequest:', error);
      alert("There was an error sending your request. Please try again.");
    }
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  private clearForm() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('emailaddr') as HTMLInputElement;
    const songInput = document.getElementById('songname') as HTMLInputElement;
    const msgInput = document.getElementById('emailmsg') as HTMLTextAreaElement;
    
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (songInput) songInput.value = '';
    if (msgInput) msgInput.value = '';
  }

  getTodayDate() {
    // Date object
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    // we will display the date as DD-MM-YYYY 
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    console.log("The current date is " + currentDate); 
    return currentDate;
  }

}
