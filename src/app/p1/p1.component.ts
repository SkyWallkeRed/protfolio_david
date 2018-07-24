import { Component, OnInit } from '@angular/core';
// import { ds } from .
@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss']
})
export class P1Component implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: '../../assets/chess/1.png', alt: 'Description for Image 1', title: 'Enter' });
    this.images.push({ source: '../../assets/chess/2.png', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/chess/3.png', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: '../../assets/chess/4.png', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: '../../assets/chess/5.png', alt: 'Description for Image 5', title: 'Title 5' });

  }
}


