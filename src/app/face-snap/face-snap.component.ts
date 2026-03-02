import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapBtnText!: string;
  userHasLike!: boolean;

  ngOnInit(): void {
    this.snapBtnText = "J'aime";
    this.userHasLike = false;
  }

  onSnap(): void {
    if (this.userHasLike) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnaps();
    this.snapBtnText = "J'aime";
    this.userHasLike = false;
  }

  snap() {
    this.faceSnap.addSnaps();
    this.snapBtnText = "Enlever le j'aime";
    this.userHasLike = true;
  }
}
