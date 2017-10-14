import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ApiProvider } from './../providers/api/json-api';
import { ProtfolioPage } from '../pages/protfolio/protfolio';
import { ModalContentPage } from '../pages/protfolio/modal/add-coin-modal';


@NgModule({
    declarations: [
        MyApp,
        ProtfolioPage,
        ModalContentPage,
        MainPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ProtfolioPage,
        ModalContentPage,
        MainPage
    ],
    providers: [
        ApiProvider,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
