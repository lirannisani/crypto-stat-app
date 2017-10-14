import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ProtfolioPage } from '../pages/protfolio/protfolio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
    //rootPage = MainPage;
    rootPage = ProtfolioPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
