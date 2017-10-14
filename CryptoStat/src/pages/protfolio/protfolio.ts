import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalContentPage } from '../protfolio/modal/add-coin-modal';

@Component({
    selector: 'protfolio-main',
    templateUrl: 'protfolio.html'
})
export class ProtfolioPage {

    constructor(public modalCtrl: ModalController) {
    }

    openModal() {

        let modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
    }

    onLink(url: string) {
        window.open(url);
    }
}

