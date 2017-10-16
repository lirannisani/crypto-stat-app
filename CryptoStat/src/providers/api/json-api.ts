import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

    coins: any = [];
    coinsDic: any = [];
    tmpCoins: any = [];

    constructor(public http: Http) { }

    getCoins(): any {

        //this.coins = [
        //    { 'name': 'bitcoin', 'volume': '12487444' },
        //    { 'name': 'eth', 'volume': '333322222' }
        //];

        this.http.get('assets/data/data1.json').map(res => res.json()).subscribe(data => {
            this.coins = data.coins;
            this.coinsDic = this.coins.reduce(function (map, obj) {
                map[obj.name] = obj;
                return map;
            }, {});
        }, (rej) => {
            console.error("Could not load local data", rej) 
            });
    }

    getFilterCoins(queryText) {
        if (queryText === void 0) { queryText = ''; }
        var result = [];

        this.coins.forEach(function (coin) {
            if (coin.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1) {
                result.push(coin);
            }
        });

        return result;
    };
} 