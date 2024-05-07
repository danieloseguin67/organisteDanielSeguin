import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { SharedMethods } from '../shared/SharedMethods';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})

export class ContactmeComponent  {
  currentDate: string = this.getTodayDate();

  sendQuestion(_name: string, _email: string, _question: string) {
    alert("Your question to the webmaster has been sent");
    return fetch(environment.apiserver+"/questionslist", {method: "POST", body: JSON.stringify({emailaddress: _email, name: _name, question: _question, creationDate: this.currentDate, id: "0"})});
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
