import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { musicModel } from '../musicModel';
import { Router, RouterModule } from '@angular/router';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout'; 
import { OnInit } from '@angular/core'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {
  @Input() musicModel!:musicModel;

  constructor( private responsive: BreakpointObserver) { 

  } 

  ngOnInit() { 

    this.responsive.observe([ 
      Breakpoints.TabletPortrait, 
      Breakpoints.TabletLandscape, 
      Breakpoints.HandsetLandscape, 
      Breakpoints.HandsetPortrait, 
      Breakpoints.Handset, 
      Breakpoints.Large, 
      Breakpoints.Medium, 
      Breakpoints.Small, 
      Breakpoints.Tablet, 
      Breakpoints.Web, 
      Breakpoints.WebLandscape, 
      Breakpoints.WebPortrait, 
      Breakpoints.XLarge, 
      Breakpoints.XSmall 
    ]) 
     .subscribe(result => { 
        const breakpoints = result.breakpoints; 

        if (breakpoints[Breakpoints.TabletPortrait]) { 
          console.log("Google est en mode tablette portrait"); 
        }  
        else if (breakpoints[Breakpoints.TabletLandscape]) { 
          console.log("Google est en mode tablette paysage"); 
        } 
        else if (breakpoints[Breakpoints.HandsetPortrait]) { 
          console.log("Google est en mode mobile portrait"); 
        } 
        else if (breakpoints[Breakpoints.HandsetLandscape]) { 
          console.log("Google est en mode mobile paysage"); 
        } 
        else if (breakpoints[Breakpoints.Large]) { 
          console.log("Google est en mode large"); 
        } 
        else if (breakpoints[Breakpoints.Medium]) { 
          console.log("Google est en mode medium"); 
        } 
        else if (breakpoints[Breakpoints.Small]) { 
          console.log("Google est en mode small"); 
        } 
        else if (breakpoints[Breakpoints.Tablet]) { 
          console.log("Google est en mode tablette"); 
        } 
        else if (breakpoints[Breakpoints.Web]) { 
          console.log("Google est en mode web"); 
        } 
        else if (breakpoints[Breakpoints.WebLandscape]) { 
          console.log("Google est en mode web paysage"); 
        } 
       else if (breakpoints[Breakpoints.WebPortrait]) { 
          console.log("Google est en mode web portrait"); 
        } 
        else if (breakpoints[Breakpoints.XSmall]) { 
          console.log("Google est en mode xSmall"); 
        } 
        else if (breakpoints[Breakpoints.XLarge]) { 
          console.log("Google est en mode xlarge"); 
        } 
        else { 
          console.log("Google ne reconnait pas le mode"); 
        } 

     }); 

  } 

}

