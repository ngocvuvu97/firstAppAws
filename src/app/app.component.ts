import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAppAws';
  msaapDisplayTitle = true;
  // msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [
    {
      title: 'Chúc Bé Kiều Anh ngủ siêu ngon ha:3 Yêu bé. Anh Vũ 16 tủi',
      link: 'assets/image/mp3.mp3'
    },
    {
      title: 'Chúc Bé Kiều Anh ngủ siêu ngon ha:3 Yêu bé. Anh Vũ 16 tủi',
      link: 'assets/image/mp31.mp3'
    }
  ];
}
