import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/layout/navigation/services/navigation.service';

@Component({
  selector: 'fuzzy-guacamole-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {
  @Input() title: string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  /**
   * close: close the opened page.
   */
  public close(): void {
    this.navigationService.close();
  }
}
