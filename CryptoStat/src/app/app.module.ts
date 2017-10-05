import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ApiProvider } from './../providers/api/json-api';

@NgModule({
  declarations: [
    MyApp,
    MainPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage
  ],
  providers: [
      ApiProvider,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
