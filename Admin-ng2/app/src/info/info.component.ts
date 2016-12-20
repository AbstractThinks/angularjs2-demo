import {
    Component,
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    ViewChild,

}     from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import { Http } from '@angular/http';

/// <reference path="../../../typings/globals/jquery/index.d.ts" />


@Component({
  templateUrl: './info.html',
  // directives: [FooterComponent]
})
export class InfoComponent implements AfterViewChecked {
    infoDatas:any = [];
    @ViewChild('infoModal')
    infoModal:any;

    constructor(private http: Http) {
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


    modifyHandle():void {
        this.infoModal.show({inverted: true});
    }

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
        this.infoDatas.push({"name":"John Jesse1","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"})
    }
    handleLibrarySave ():void {
        
    }
}
