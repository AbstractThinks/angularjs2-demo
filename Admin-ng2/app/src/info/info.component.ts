import {
    Component,
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    ViewChild,
} from '@angular/core';

import { Http,Headers,Response  } from '@angular/http';
import {UrlService} from '../service/urlService.component'

/// <reference path="../../../typings/globals/jquery/index.d.ts" />


@Component({
  templateUrl: './info.html',
  providers: [UrlService],
})

export class InfoComponent implements AfterViewChecked {
    infoDatas:any = {};
    equipment:any = {};
    shcools:any = [];
    userProfile:any = {};

    @ViewChild('infoModal')
    infoModal:any;

    constructor(private http: Http, private urlService: UrlService) {
        let that = this;
        this.http
            .get('http://k12.iyunbei.com/api/profile')
            .toPromise()
            .then((response) => {
                that.userProfile = response.json();
                let requrl = `http://k12.iyunbei.com/api/equipment/${that.userProfile.schoolId}/1/2`
                this.http
                    .get(requrl)
                    .toPromise()
                    .then((response) => {
                        that.infoDatas = response.json();
                    });
            });
       

        this.http
            .get('http://k12.iyunbei.com/api/schools?page=1')
            .toPromise()
            .then((response) => {
                that.shcools = response.json();
            });
    }

    ngAfterViewChecked():void {
        $('tr.transition.hidden').transition('fly left');
    }

    handleSave ():void {
        let data = this.urlService.urlEncode(this.equipment).substr(1);
        let headers = new Headers({'Content-Type': 'application/json'});
        let that = this;

        console.log(this.equipment)
        that.infoModal.hide()

        this.http
            .post(`http://k12.iyunbei.com/api/equipment?${data}`,this.equipment,{headers: headers})
            .toPromise()
            .then((response) => {
               console.log(response.json())
               that.infoModal.hide();
            })
    }
    handleGetNext ():void {
        let that = this;
        let pageNumber = that.infoDatas.pageNumber + 1;
        this.http
            .get(`http://k12.iyunbei.com/api/equipment/0/${pageNumber}/2`)
            .toPromise()
            .then((response) => {
                let that = this;
                that.infoDatas = response.json();
            });
    }
    handleGetPrevious ():void {
        let that = this;
        let pageNumber = that.infoDatas.pageNumber - 1;
        this.http
            .get(`http://k12.iyunbei.com/api/equipment/0/${pageNumber}/2`)
            .toPromise()
            .then((response) => {
                let that = this;
                that.infoDatas = response.json();
            });
    }
}
