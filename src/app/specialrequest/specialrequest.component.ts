import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { SharedMethods } from '../shared/SharedMethods';

@Component({
  selector: 'app-specialrequest',
  standalone: true,
  imports: [],
  templateUrl: './specialrequest.component.html',
  styleUrl: './specialrequest.component.css'
})
export class SpecialrequestComponent {
  currentDate: string = this.getTodayDate();

  sendRequest(_name: string, _email: string, _song: string, _msg: string) {
    alert("Your special request has been sent to Daniel");
    return fetch(environment.apiserver+"/specialrequests", {method: "POST", body: JSON.stringify({songName: _song, requesterName: _name, requesterEmail: _email, creationDate: this.currentDate, id: "0"})});
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
