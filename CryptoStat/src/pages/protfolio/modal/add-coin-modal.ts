import { Component } from '@angular/core';

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

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.initializeItems();
    }

    initializeItems() {
        this.items = ["bitcoin", "eth", "ripple"];
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

    dismiss() {
        this.viewCtrl.dismiss();
    }
}