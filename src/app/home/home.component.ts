import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { musicModel } from '../musicModel';
import { MusicComponent } from '../music/music.component';
import { MusicService } from '../musicService';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MusicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  songList: musicModel[] = [];
  filteredSongList: musicModel[] = [];
  musicservice: MusicService = inject (MusicService);

  constructor() {
    this.musicservice.getAllMusicSongs().then((songList: musicModel[]) => {
      this.songList = songList;
      this.filteredSongList = songList;
  });
  }
  
  filterResults(text: string) {
      // must search text within the songName, songAuther, songDescription

     console.log("API Server = ",environment.apiserver);

     if (!text) this.filteredSongList = this.songList;
     console.log("value of filtered = ",text)

     this.filteredSongList = this.songList.filter(
     musicModel => musicModel?.songCategory.toLowerCase().includes(text.toLowerCase()));
     console.log(this.filteredSongList);

     if ( this.filteredSongList.length === 0) {
       this.filteredSongList = this.songList.filter(
         musicModel => musicModel?.songName.toLowerCase().includes(text.toLowerCase()));
         console.log(this.filteredSongList);
     }

     if ( this.filteredSongList.length === 0) {
       this.filteredSongList = this.songList.filter(
         musicModel => musicModel?.songAuthor.toLowerCase().includes(text.toLowerCase()));
       console.log(this.filteredSongList);
     }

    }

    registerUser(text: string) {
      window.alert("Option not implemented yet");
    }

}
