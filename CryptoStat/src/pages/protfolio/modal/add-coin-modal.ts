﻿import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

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
    selectedCoinPrice: any  = 0;
    selectedCoinName: any = 0;
    amount: any;

    constructor(
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