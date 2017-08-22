import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";

import { ArticlesPage } from '../pages/articles/articles';
import { ArticlesProvider } from '../providers/articles/articles';
import { ArticlesDetailPage } from '../pages/articles-detail/articles-detail';


@NgModule({
  declarations: [MyApp, HomePage, ListPage, LoginPage, ArticlesPage, ArticlesDetailPage],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, LoginPage, ArticlesPage, ArticlesDetailPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ArticlesProvider
  ]
})
export class AppModule {}
