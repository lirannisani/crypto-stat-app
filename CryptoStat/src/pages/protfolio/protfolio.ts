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

        this.CalcTotalAndChange();
    }

    CalcTotalAndChange() {
        for (var coinInProtfolio of this.protfolio) {
            console.log("price: " + coinInProtfolio.price);
            console.log("priceFixed: " + coinInProtfolio.price.toFixed(2));

            this.totalValue += coinInProtfolio.price * coinInProtfolio.amount;
            console.log("change24: " + coinInProtfolio.change24.toFixed(2));
            console.log("change24 before add: " + this.changeIn24Hour);
            this.changeIn24Hour += parseFloat(coinInProtfolio.change24);

            console.log("Total change24:" + this.changeIn24Hour);
        }

        this.changeIn24Hour = parseFloat(Number(this.changeIn24Hour).toFixed(2));
        this.totalValue = parseFloat(Number(this.totalValue).toFixed(2));
    }

    openModal() {

        //let modal = this.modalCtrl.create(ModalContentPage, { coins: this.coins });

        //// Getting data from the modal:
        //modal.onDidDismiss(data => {
        //    console.log('MODAL DATA', data);
        //    this.protfolio.push(data);
        //    console.log('after MODAL DATA', data);

        //});

        //modal.present();
    }

    onLink(url: string) {
        window.open(url);
    }
}

