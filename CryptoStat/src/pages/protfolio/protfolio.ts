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

    changeIn24Hour: number = 0;
    totalValue: number = 0;

    constructor(public modalCtrl: ModalController, public apiProvider: ApiProvider) {
        this.coins = this.apiProvider.coinsDic;
        this.InitProtfolio();
        this.CalcTotalAndChange();
    }

    InitProtfolio() {
        this.protfolio = [];

        var bitcoinDetails = this.coins["Bitcoin"];
        var ethDetails = this.coins["Ethereum"];
        var bitcoinCashDetails = this.coins["Bitcoin Cash"];

        console.log("bitcoin cash:" + bitcoinCashDetails);
        var iotaDetails = this.coins["IOTA"];

        console.log("details: " + bitcoinDetails);
        var bitcoin = {
            price: bitcoinDetails.price,
            amount: 2,
            name: bitcoinDetails.name,
            symbol: bitcoinDetails.symbol,
            change24: bitcoinDetails.change24
        };

        var eth = {
            price: ethDetails.price,
            amount: 1,
            name: ethDetails.name,
            symbol: ethDetails.symbol,
            change24: ethDetails.change24
        };

        var bitcoinCash = {
            price: bitcoinCashDetails.price,
            amount: 1,
            name: bitcoinCashDetails.name,
            symbol: bitcoinCashDetails.symbol,
            change24: bitcoinCashDetails.change24
        };

        var iot = {
            price: iotaDetails.price,
            amount: 1,
            name: iotaDetails.name,
            symbol: iotaDetails.symbol,
            change24: iotaDetails.change24
        };

        this.protfolio.push(bitcoin);
        this.protfolio.push(eth);
        this.protfolio.push(bitcoinCash);
        this.protfolio.push(iot);
    }

    CalcTotalAndChange() {
        for (var coinInProtfolio of this.protfolio) {
            this.totalValue += coinInProtfolio.price * coinInProtfolio.amount;
            this.changeIn24Hour += parseFloat(coinInProtfolio.change24);
        }

        this.changeIn24Hour = parseFloat(Number(this.changeIn24Hour).toFixed(2));
        this.totalValue = parseFloat(Number(this.totalValue).toFixed(2));
    }

    doRefresh(refresher) {
        this.apiProvider.load().then(res => {
            console.log("finish load");
            this.InitProtfolio();
            refresher.complete();
        });
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

