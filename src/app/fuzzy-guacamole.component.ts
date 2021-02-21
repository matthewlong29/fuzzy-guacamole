import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationService } from './layout/navigation/services/navigation.service';

@Component({
  selector: 'app-fuzzy-guacamole',
  templateUrl: './fuzzy-guacamole.component.html',
  styleUrls: ['./fuzzy-guacamole.component.scss']
})
export class FuzzyGuacamoleComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.setSidenav(this.sidenav);
    // this.navigationService.open(); // auto open
  }
}
