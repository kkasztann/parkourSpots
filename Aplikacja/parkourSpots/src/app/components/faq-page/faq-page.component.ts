import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit, AfterViewChecked {

  screenWidth: number;

  q1: boolean;
  q2: boolean;
  q3: boolean;
  q4: boolean;
  q5: boolean;

  constructor() {
    this.onResize();

    this.q1 = false;
    this.q2 = false;
    this.q3 = false;
    this.q4 = false;
    this.q5 = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.onResize();
  }

}
