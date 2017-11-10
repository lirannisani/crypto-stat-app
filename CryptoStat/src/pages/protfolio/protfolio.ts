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

    changeIn24Hour = 7.3;
    totalValue = 5000.22;

    constructor(public modalCtrl: ModalController, public apiProvider: ApiProvider) {
        this.coins = this.apiProvider.coinsDic;
        var bitcoin = {
            price: 6892.23,
            amount: 2,
            name: "Bitcoin",
            symbol: "BTC",
            change24: 4.65
        };

        var eth = {
            price: 311.66,
            amount: 4,
            name: "ethereum",
            symbol: "ETH",
            change24: 1.79
        };

        var iot = {
            price: 0.487904,
            amount: 4,
            name: "iota",
            symbol: "IOT",
            change24: -1.3
        };


        this.protfolio.push(bitcoin);
        this.protfolio.push(eth);
        this.protfolio.push(iot);
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

