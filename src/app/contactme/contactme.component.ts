import { Component, inject } from '@angular/core';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})

export class ContactmeComponent  {
  private emailService = inject(EmailService);
  currentDate: string = this.getTodayDate();

  async sendQuestion(_name: string, _email: string, _question: string) {
    // Validate required fields
    if (!_name || !_email || !_question) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    if (!this.isValidEmail(_email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log('Submitting contact question:', { name: _name, email: _email });

    try {
      const success = await this.emailService.sendContactWebmaster(_name, _email, _question);
      
      if (success) {
        alert("Your question has been sent to the webmaster successfully!");
        // Clear form fields
        this.clearForm();
      } else {
        alert("There was an error sending your question. Please check the console for details and try again.");
      }
    } catch (error) {
      console.error('Error in sendQuestion:', error);
      alert("There was an error sending your question. Please try again.");
    }
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  private clearForm() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('emailaddr') as HTMLInputElement;
    const questionInput = document.getElementById('question') as HTMLTextAreaElement;
    
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (questionInput) questionInput.value = '';
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
