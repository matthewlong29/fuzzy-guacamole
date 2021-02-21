import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fuzzy-guacamole-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
