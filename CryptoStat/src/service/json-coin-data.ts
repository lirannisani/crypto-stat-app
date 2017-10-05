import { Http } from '@angular/http';

export class CoinsRepository {
    http: Http;

    constructor() {
    }

    getCoinsDetails() {
        this.http.get('assets/data/data1.json');
        console.log("Hello");
    }
}