import {
    Component,
    AfterViewChecked,
    ViewChild,

} from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import { Http,Headers,Response } from '@angular/http';
import {Location} from '@angular/common';
import {UrlService} from '../service/urlService.component';

@Component({
  templateUrl: './detailed.html',
  providers: [UrlService]
  // directives: [FooterComponent]
})
export class DetailedComponent implements AfterViewChecked{

    infoDatas:any = [];
    borrowData:any = [];
    historys:any = [];

    @ViewChild('libraryModal')
    libraryModal:any;
    @ViewChild('libraryHistoryModal')
    libraryHistoryModal:any;

    constructor(private http: Http, private location: Location, private urlService: UrlService) {

        let that = this;


        this.http
            .get(`http://k12.iyunbei.com/api/equipment-specific?equipmentGeneralId=${location.path().split('/detailed/')[1]}`)
            .toPromise()
            .then((response) => {
                console.log(response.json())
                that.infoDatas = response.json();
            });
        this.borrowData = {}
        this.historys = []

    }


    handleChange():void {
        this.infoDatas = [
            {"name":"John Jesse","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"},
            {"name":"John Jesse","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"},
            {"name":"John Jesse","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"},
            {"name":"John Jesse","date":"September 14, 2013","email":"jhlilk22@yahoo.com","male":"Yes"}
        ]
    }

    handleGetData():void {
        let that = this;
        this.http
            .get('../app/mockData/tableDatas.json')
            .toPromise()
            .then((response) => {
                that.infoDatas = response.json();
            })
    }
    ngAfterViewChecked():void {
        $('tr.transition.hidden').transition('fly left');
    }
    borrowHandle(e:any):void {
        this.libraryModal.show({inverted: true});
        console.log(e) 
        this.borrowData = {
            ...this.borrowData,
            ...e
        };   
    }
    libraryHistoryHandle(e:any):void {
        this.libraryHistoryModal.show({inverted: true});
        let that = this;
        this.http
            .get(`http://k12.iyunbei.com/api/equipment-history?equipmentSpecificId=${e}`)
            .toPromise()
            .then((response) => {
                console.log(response.json())
                that.historys = response.json()
            })
    }
    handleLibrarySave(e:any):void {
        let that = this;
        let headers = new Headers({'Content-Type': 'application/json'});
        let data = this.urlService.urlEncode(that.borrowData).substr(1);
        alert(data)
        this.http
            .post(`http://k12.iyunbei.com/api/equipment-specific/?${data}`,data,{headers: headers})
            .toPromise()
            .then((response) => {
                console.log(response.json())
                // that.infoDatas = response.json();
            })
    }

}
