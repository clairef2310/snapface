import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Cerbère',
        'https://cdn.prod.website-files.com/62b2d13ccd148d1bccca591c/65662970d24de5c56ad0ff76_akitainu.jpg',
        'Mon chien',
        new Date(),
        3
      ),
      new FaceSnap(
        'Angèle',
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Hyene_i_Masai_Mara_naturreservat.jpg',
        'Ma hyène',
        new Date(),
        100
      ),
      new FaceSnap(
        'Belzébuth',
        'https://upload.wikimedia.org/wikipedia/commons/5/57/Chat_noir_%C3%A0_tache_blanche_au_cou.jpg',
        'Mon chat',
        new Date(),
        12
      ),
    ];

    this.faceSnaps[1].setLocation('à la maison');
  }
}
