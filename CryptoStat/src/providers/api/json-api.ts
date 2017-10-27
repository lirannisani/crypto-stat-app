﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/Rx';

@Injectable()
export class ApiProvider {

    coins: any;
    coinsDic: any = [];
    tmpCoins: any = [];
    data: any;

    constructor(public http: Http) { }

    load() {
        console.log("enter load");
        if (this.data) {
            console.log("enter promise");

            // already loaded data
            return Promise.resolve(this.data);
        }

        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            this.http.get('http://94.75.240.154:9000/externl/get_coins_stats')
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    console.log("dataL " + data);

                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    getCoins(): any {

        //this.coins = [
        //    { 'name': 'bitcoin', 'volume': '12487444' },
        //    { 'name': 'eth', 'volume': '333322222' }
        //];

        this.http.get('http://94.75.240.154:9000/externl/get_coins_stats').map(res => res.json()).subscribe(data => {
            this.coins = data;
            this.coinsDic = data.reduce(function (map, obj) {
                map[obj.name] = obj;
                return map;
            }, {});

            console.log("data: " + data);
            return data;
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