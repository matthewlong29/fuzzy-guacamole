import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { FuzzyGuacamoleMaterialModule } from './fuzzy-guacamole-material.module';
import { FuzzyGuacamoleRoutingModule } from './fuzzy-guacamole-routing.module';
import { FuzzyGuacamoleComponent } from './fuzzy-guacamole.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavigationService } from './layout/navigation/services/navigation.service';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecipeTileComponent } from './recipes/components/recipe-tile/recipe-tile.component';
import { CreateRecipeService } from './recipes/services/create-recipe.service';
import { DeleteRecipeService } from './recipes/services/delete-recipe.service';
import { ReadRecipeService } from './recipes/services/read-recipe.service';
import { RecipeService } from './recipes/services/recipe.service';
import { UpdateRecipeService } from './recipes/services/update-recipe.service';
import { PageBannerComponent } from './shared-components/page-banner/page-banner.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    FuzzyGuacamoleComponent,
    ProfileComponent,
    FavoritesComponent,
    ExploreComponent,
    MessagesComponent,
    NotificationsComponent,
    PageBannerComponent,
    DashboardComponent,
    RecipeTileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    FuzzyGuacamoleRoutingModule,
    FuzzyGuacamoleMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    NavigationService,
    CreateRecipeService,
    ReadRecipeService,
    UpdateRecipeService,
    DeleteRecipeService,
    RecipeService,
  ],
  bootstrap: [FuzzyGuacamoleComponent]
})
export class FuzzyGuacamoleModule { }
