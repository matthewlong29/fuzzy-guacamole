import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fuzzy-guacamole-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }
}
