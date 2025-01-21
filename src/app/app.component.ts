import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import heic2any from 'heic2any';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  images: string[] = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/5.jpg',
    'assets/6.jpg',
    'assets/7.jpg',
    'assets/8.jpg',
    'assets/9.jpg',
    'assets/10.jpg',
    'assets/11.jpg',
    'assets/12.jpg',
    'assets/13.jpg',
    'assets/14.jpeg',
    'assets/15.jpg',
    'assets/16.jpg',
    'assets/17.jpeg',
    'assets/18.jpg',
    'assets/19.jpg',
    'assets/20.jpg',
    'assets/21.jpg',
    'assets/22.jpg',
    'assets/23.jpg',
  ];
  convertedImages: string[] = [];

  currentSlide: number = 0;
  showSurprise: boolean = false;
  surpriseImage: string = 'assets/surprise.png';

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }, 3000); 
  }

  revealSurprise(): void {
    this.showSurprise = true;
  }
}
