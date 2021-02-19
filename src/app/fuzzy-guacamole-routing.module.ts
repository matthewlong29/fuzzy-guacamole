import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddRecipeFormComponent } from './recipes/components/add-recipe-form/add-recipe-form.component';

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
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'add-new',
    component: AddRecipeFormComponent
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
