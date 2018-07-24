import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as sr from '../../../node_modules/scrollreveal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sr;
  @ViewChild('p1') p1: ElementRef;
  constructor() { }

  ngOnInit() {
    // this.sr = ScrollReveal();
    // sr.reveal(this.p1);
  }

}
