import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule
  ]
})
export class FuzzyGuacamoleMaterialModule { }
