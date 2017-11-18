import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'search-coin-modal',
    templateUrl: 'search-coin-modal.html'
})

export class ModalSearchCoinPage {

    Coins: any = [];
    ShownCoins: any = [];

    queryText: string = '';

    constructor(

        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.Coins = params.get('coins');
        this.ShownCoins = this.Coins;

        console.log("modal-search - coinsName" + this.Coins);
        console.log("modal-search - first name" + this.Coins[0]);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    searchCoin() {
        this.ShownCoins = this.getFilterCoinsName(this.queryText);
    }

    getFilterCoinsName(queryText) {
        if (queryText === void 0) { queryText = ''; }
        var result = [];

        this.Coins.forEach(function (coin) {
            if (coin.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1) {
                result.push(coin);
            }
        });

        return result;
    };

    select_item(coin) {
        console.log("select item" + coin.name);
        this.viewCtrl.dismiss(coin);
    }
}