import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [AppComponent,SocialMediaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
