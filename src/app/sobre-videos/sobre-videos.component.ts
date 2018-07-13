import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { VideoModel } from '../models/video.model';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre-videos',
  templateUrl: './sobre-videos.component.html'
})
export class SobreVideosComponent implements OnInit {

  private videosColecao: AngularFirestoreCollection<VideoModel>;
  videos: Observable<VideoModel[]>;

  constructor(public DB: AngularFirestore, public sanitizer: DomSanitizer) {

    // TODO: Ordenar por data de criação
    this.videosColecao = DB.collection<VideoModel>('videos');
    this.videos = this.videosColecao.valueChanges();
  }

  transform(video: VideoModel) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.id_video);
  }

  ngOnInit() {
  }
}
