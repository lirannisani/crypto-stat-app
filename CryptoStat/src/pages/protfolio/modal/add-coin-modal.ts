import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalSearchCoinPage } from '../modal/search-coin-modal';

@Component({
    selector: 'add-coin-modal',
    templateUrl: 'add-coin-modal.html'
})

export class ModalContentPage {

    items: any[];
    displayProperty: string;
    title: string;
    selectedItem: any;
    searchQuery: string;

    coinsName: any = [];
    selectCoin: any;
    selectedCoinPrice: any = 0;
    selectedCoinName: any = 0;
    amount: any;

    constructor(
        public modalCtrl: ModalController,
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.initializeItems();
        this.items = params.get('coins');

        this.coinsName = Object.keys(this.items);
    }

    initializeItems() {
        // this.items = ["bitcoin", "eth", "ripple"];
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item[this.displayProperty].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    onChange(selectedValue: any) {
        this.selectedCoinName = this.items[selectedValue].name;
        this.selectedCoinPrice = this.items[selectedValue].price;
    }

    selectCoinClick() {
        console.log("click to open search modal");

        var array_values = new Array();

        for (var key of Object.keys(this.items)) {
            array_values.push(this.items[key]);
        }


        let selectCoinModal = this.modalCtrl.create(ModalSearchCoinPage, { coins: array_values });

        selectCoinModal.onDidDismiss(data => {
            console.log('MODAL DATA', data);
            this.selectCoin = data;
            this.selectedCoinPrice = this.selectCoin.price;
            this.selectedCoinName = this.selectCoin.name;
            console.log('after MODAL DATA', data);

        });

        selectCoinModal.present();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    openFilters() {
        console.log("amount " + this.amount);
        console.log("name " + this.selectedCoinName);
        var coinDetails = { "name": this.selectedCoinName, "amount": this.amount };
        this.viewCtrl.dismiss(coinDetails);
    }
}