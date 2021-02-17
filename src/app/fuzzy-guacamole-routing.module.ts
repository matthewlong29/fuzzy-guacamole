import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FuzzyGuacamoleRoutingModule { }
