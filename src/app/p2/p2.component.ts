import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: '../../assets/gym/1.png', alt: 'Description for Image 1', title: 'Enter' });
    this.images.push({ source: '../../assets/gym/2.png', alt: 'Description for Image 2', title: 'Title 2' });
    this.images.push({ source: '../../assets/gym/3.png', alt: 'Description for Image 3', title: 'Title 3' });
    this.images.push({ source: '../../assets/gym/4.png', alt: 'Description for Image 4', title: 'Title 4' });
    this.images.push({ source: '../../assets/gym/5.png', alt: 'Description for Image 5', title: 'Title 5' });

  }

}
