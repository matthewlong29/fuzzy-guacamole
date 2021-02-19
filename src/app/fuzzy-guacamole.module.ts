import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuzzyGuacamoleMaterialModule } from './fuzzy-guacamole-material.module';
import { FuzzyGuacamoleRoutingModule } from './fuzzy-guacamole-routing.module';
import { FuzzyGuacamoleComponent } from './fuzzy-guacamole.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavigationService } from './layout/navigation/services/navigation.service';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageBannerComponent } from './shared-components/page-banner/page-banner.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FuzzyGuacamoleComponent,
    ProfileComponent,
    BookmarksComponent,
    ExploreComponent,
    MessagesComponent,
    NotificationsComponent,
    PageBannerComponent
  ],
  imports: [
    BrowserModule,
    FuzzyGuacamoleRoutingModule,
    FuzzyGuacamoleMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [FuzzyGuacamoleComponent]
})
export class FuzzyGuacamoleModule { }
