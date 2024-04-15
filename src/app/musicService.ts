import { Injectable } from '@angular/core';
import { musicModel } from './musicModel';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class MusicService {
 url = "http://localhost:3001/music";

  // Purpose of Location?
  constructor(private _Location: Location) {}

  async getAllMusicSongs() : Promise<musicModel[]> {
    // also checkout angular.io for HTTP client service class
    const data = await fetch(this.url)
    return await data.json() ?? [];
  }

  async getMusicSongById(id: string): Promise<musicModel | undefined> {
    // also checkout angular.io for HTTP client service class
    console.log("url = ",this.url);
    console.log("id = ",id)
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // placeholder for function to add new song by admin user

  // placeholder for function to update a song by admin user

  // placeholder for function to delete a song by admin user 

  submitApplication(firstName: string, lastName: string, email: string) {
     const bodyMsg = "hello";
     const subjectMsg = "Attention required: client insterated in property";
     console.log("first name: ",firstName);
     console.log("Last name: ",lastName);
     console.log("Email Address: ",email);
     window.alert("Your application request has been submitted and someone will answer  you shortly");
     this.sendEmail("Daniel", "Seguin", "daniel@seguin.dev", bodyMsg, subjectMsg);
  }

  backClicked() {
    this._Location.back();
  }

  sendEmail(firstName: string, lastName: string, email: string, bodyText: string, subjectText: string) {
    const personName = firstName + " " + lastName;
    console.log("Send email to ", email);
    console.log("Name = ",firstName, " ", lastName);
    console.log("Subject = ", subjectText);
    console.log("Body = ", bodyText);
    console.log("name = ",personName);
 
    var tempParams = {
      from_name: email,
      to_name: "daniel@seguin.dev",
      messsage: bodyText
    };
    /*
    emailjs.Send("service_0nh5sa8", "template_as3xwbs", tempParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    */
  }

}
