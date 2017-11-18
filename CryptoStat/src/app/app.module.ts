import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ApiProvider } from './../providers/api/json-api';
import { ProtfolioPage } from '../pages/protfolio/protfolio';
import { ModalContentPage } from '../pages/protfolio/modal/add-coin-modal';
import { ModalSearchCoinPage } from '../pages/protfolio/modal/search-coin-modal';
import { TabMainContentPage } from '../pages/tabs/main-tab';
import { BasicPage as TabBasicPage } from '../pages/tabs/main-tab';


@NgModule({
    declarations: [
        MyApp,
        TabBasicPage,
        TabMainContentPage,
        ProtfolioPage,
        ModalContentPage,
        ModalSearchCoinPage,
        MainPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabBasicPage,
        TabMainContentPage,
        ProtfolioPage,
        ModalContentPage,
        ModalSearchCoinPage,
        MainPage
    ],
    providers: [
        ApiProvider,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
