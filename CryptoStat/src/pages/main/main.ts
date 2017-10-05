import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CoinsRepository } from '../../service/json-coin-data';
import { ApiProvider } from './../../providers/api/json-api';

@Component({
    selector: 'page-main',
    templateUrl: 'main.html'
})
export class MainPage {

    queryText: string = '';
    coins: any = [];

    constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
        this.apiProvider.getCoins();
    }

    onLink(url: string) {
        window.open(url);
    }

    ionViewDidLoad() {
    }

    searchCoin() {
        this.coins = this.apiProvider.getFilterCoins(this.queryText.toLowerCase());
    }

    ionViewWillEnter() {
        this.coins = this.apiProvider.coins;
        console.log("coins2: " + this.coins);
    }

    onCancelSearchbar(searchbar) {
        this.apiProvider.getCoins();
    }

    onClearSearchbar(searchbar) {
        this.apiProvider.getCoins();
    }
}