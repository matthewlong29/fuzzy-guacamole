import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fuzzy-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() drawerReference: any;

  constructor() {
    console.log(this.drawerReference);
  }

  ngOnInit(): void {
  }

}
