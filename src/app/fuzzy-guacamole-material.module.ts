import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule
  ]
})
export class FuzzyGuacamoleMaterialModule { }
