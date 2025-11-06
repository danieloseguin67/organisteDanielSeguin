import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS credentials
  private serviceId = 'service_0nh5sa8';
  private publicKey = 'gLAGnqUeakXx77MrF';
  
  // Template IDs for different email types
  private templateIds = {
    fanSubscription: 'template_as3xwbs',
    contactWebmaster: 'template_as3xwbs',
    specialRequest: 'template_as3xwbs'
  };

  constructor() {
    // Initialize EmailJS with your public key
    try {
      emailjs.init(this.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }

  /**
   * Send fan subscription email
   */
  async sendFanSubscription(email: string): Promise<boolean> {
    try {
      console.log('Attempting to send fan subscription email for:', email);
      
      const templateParams = {
        to_email: 'daniel@seguin.dev',
        from_name: 'Website Fan',
        from_email: email,
        subject: 'New Fan Subscription',
        message: `A new fan has subscribed with email: ${email}`,
        reply_to: email
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateIds.fanSubscription,
        templateParams,
        this.publicKey
      );

      console.log('Fan subscription email sent successfully:', response);
      return true;
    } catch (error: any) {
      console.error('Error sending fan subscription email:', error);
      console.error('Error details:', error.text || error.message || error);
      return false;
    }
  }

  /**
   * Send contact webmaster email
   */
  async sendContactWebmaster(
    name: string,
    email: string,
    question: string
  ): Promise<boolean> {
    try {
      console.log('Attempting to send contact webmaster email from:', name, email);
      
      const templateParams = {
        to_email: 'daniel@seguin.dev',
        from_name: name,
        from_email: email,
        subject: 'Question from Website Visitor',
        message: question,
        reply_to: email
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateIds.contactWebmaster,
        templateParams,
        this.publicKey
      );

      console.log('Contact email sent successfully:', response);
      return true;
    } catch (error: any) {
      console.error('Error sending contact email:', error);
      console.error('Error details:', error.text || error.message || error);
      return false;
    }
  }

  /**
   * Send special music request email
   */
  async sendSpecialRequest(
    name: string,
    email: string,
    songName: string,
    message: string
  ): Promise<boolean> {
    try {
      console.log('Attempting to send special request from:', name, email, 'for song:', songName);
      
      const templateParams = {
        to_email: 'daniel@seguin.dev',
        from_name: name,
        from_email: email,
        subject: `Special Song Request: ${songName}`,
        song_name: songName,
        message: message,
        reply_to: email
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateIds.specialRequest,
        templateParams,
        this.publicKey
      );

      console.log('Special request email sent successfully:', response);
      return true;
    } catch (error: any) {
      console.error('Error sending special request email:', error);
      console.error('Error details:', error.text || error.message || error);
      return false;
    }
  }
}
