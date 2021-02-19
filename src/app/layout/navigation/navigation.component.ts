import { Component, OnInit } from '@angular/core';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'fuzzy-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  /**
   * open: toggles the side nav open.
   */
  public open() {
    this.navigationService.open();
  }

  /**
   * close: toggles the side nav close.
   */
  public close() {
    this.navigationService.close();
  }
}
