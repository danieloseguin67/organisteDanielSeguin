import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div class="container">
        <a routerLink="/" class="navbar-brand">Daniel Seguin Organist Player</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" id="menu button" aria-label="menu button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a routerLink="/" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li class="nav-item"><a routerLink="/about" class="nav-link" routerLinkActive="active">About the organist</a></li>
            <li class="nav-item"><a routerLink="/specialrequest" class="nav-link" routerLinkActive="active">Make a Special Request</a></li>
            <li class="nav-item"><a routerLink="/contactme" class="nav-link" routerLinkActive="active">Contact the Web Master</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    FormsModule]
})

export class AppComponent {
  title = 'Daniel Seguin, Organist';


}