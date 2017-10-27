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
    coins: any;

    constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
        this.getDataFromApi();
      //  var x = this.apiProvider.getCoins();
        //console.log("x: " + x);
        //this.coins = x;
        //console.log("this.coins: " + this.coins);

    }

    getDataFromApi() {
        console.log("get from api");
        this.apiProvider.load()
            .then(data => {
                console.log("then from api");
                this.coins = data;
               // if (data != null) {
                    //for (let i = 0; i < data.length; i++) {
                    //    console.log(JSON.stringify(data));
                    //}
              //  } 
            }, () => console.log("An error ocuured"));
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
        console.log("coins3: " + this.coins);
    }

    onCancelSearchbar(searchbar) {
        this.apiProvider.getCoins();
    }

    onClearSearchbar(searchbar) {
        this.apiProvider.getCoins();
    }
}