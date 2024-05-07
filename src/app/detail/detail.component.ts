import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../musicService';
import { musicModel } from '../musicModel';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  MusicService = inject(MusicService);
  musicModel: musicModel | undefined;
  returnmsg: string = "Return to song selection page";
  listenmsg: string = "Click Here to listen to the song via YouTube";

  constructor() {
    const songId = String(this.route.snapshot.paramMap.get('id'));
    this.MusicService.getMusicSongById(songId).then(musicModel => {this.musicModel = musicModel});
  }

}
