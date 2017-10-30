import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalContentPage } from '../protfolio/modal/add-coin-modal';
import { ApiProvider } from './../../providers/api/json-api';

@Component({
    selector: 'protfolio-main',
    templateUrl: 'protfolio.html'
})
export class ProtfolioPage {

    coins: any = [];
    protfolio: any = [];

    constructor(public modalCtrl: ModalController, public apiProvider: ApiProvider) {
        this.coins = this.apiProvider.coinsDic;
    }

    openModal() {

        let modal = this.modalCtrl.create(ModalContentPage, { coins: this.coins });

        // Getting data from the modal:
        modal.onDidDismiss(data => {
            console.log('MODAL DATA', data);
            this.protfolio.push(data);
            console.log('after MODAL DATA', data);

        });

        modal.present();
    }

    onLink(url: string) {
        window.open(url);
    }
}

