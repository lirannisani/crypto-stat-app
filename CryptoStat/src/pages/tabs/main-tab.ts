import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { MainPage } from '../main/main';
import { ProtfolioPage } from '../protfolio/protfolio';


@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
export class TabMainContentPage {
    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
}

@Component({
    template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Main" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Protfolio" [root]="protfolioPage"></ion-tab>
    </ion-tabs>
`})
export class BasicPage {
    rootPage = MainPage;
    protfolioPage = ProtfolioPage;
}