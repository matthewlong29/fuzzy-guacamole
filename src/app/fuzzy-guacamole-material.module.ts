import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    MatSidenavModule,
    MatButtonModule
  ]
})
export class FuzzyGuacamoleMaterialModule { }
