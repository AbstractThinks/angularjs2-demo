import {
    Component,
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    ViewChild,

} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import { Http,Headers,Response  } from '@angular/http';
import {UrlService} from '../service/urlService.component'

/// <reference path="../../../typings/globals/jquery/index.d.ts" />


@Component({
  templateUrl: './info.html',
  providers: [UrlService]
  // directives: [FooterComponent]
})
export class InfoComponent implements AfterViewChecked {
    infoDatas:any = [];
    equipment:any = {};

    @ViewChild('infoModal')
    infoModal:any;

    constructor(private http: Http, private urlService: UrlService) {
        this.http
            .get('../app/mockData/tableDatas.json')
            .toPromise()
            .then((response) => {
                let that = this;
                setTimeout(function () {
                    that.infoDatas = response.json();

                }, 1000);
            })
    }


    // modifyHandle():void {
    //     this.infoModal.show({inverted: true});
    // }

    handleGetData():void {
        this.http
            .get('../app/mockData/tableDatas.json')
            .toPromise()
            .then((response) => {
                let that = this;
                setTimeout(function () {
                    that.infoDatas = response.json();
                }, 5000);

            })
    }

    ngAfterViewChecked():void {
        $('tr.transition.hidden').transition('fly left');
    }

    handleSave ():void {
        let data = this.urlService.urlEncode(this.equipment).substr(1);
        let headers = new Headers({'Content-Type': 'application/json'});
        let that = this;
        this.http
            .post(`http://k12.iyunbei.com/api/equipment?${data}`,data,{headers: headers})
            .toPromise()
            .then((response) => {
               console.log(response.json())
            })
        this.infoDatas.push({"name":"John Jesse1","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"})
    }
}
