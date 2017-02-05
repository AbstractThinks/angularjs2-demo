import {
    Component,
    AfterViewChecked,
    ViewChild,

}     from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import { Http } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  templateUrl: './detailed.html',
  // directives: [FooterComponent]
})
export class DetailedComponent implements AfterViewChecked{
    infoDatas:any = [];
    @ViewChild('libraryModal')
    libraryModal:any;
    @ViewChild('libraryHistoryModal')
    libraryHistoryModal:any;
    constructor(private http: Http, private router: ActivatedRoute) {
        // console.log()
        // this.http
        //     .get('../app/mockData/tableDatas2.json')
        //     .toPromise()
        //     .then((response) => {
        //         this.infoDatas = response.json();
        //     });
        let that = this;
        this.http
            .get(`http://k12.iyunbei.com/api/equipment-specific?equipmentGeneralId=${this.router.url._value[1].path}`)
            .toPromise()
            .then((response) => {
                console.log(response.json())
                that.infoDatas = response.json();
            });
        this.borrowData = {
            "seriesNumber":"",
            "barCode":"",
            "staffId":"",
            "status":"",
            "comment":"",
            "dueDate":"",
            "equipmentGeneralId":""
        }
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
            .get(`http://k12.iyunbei.com/api/equipment-history?equipmentSpecificId=8`)
            .toPromise()
            .then((response) => {
                that.historys = [
                    ...that.historys,
                    ...response.json()
                ]
            })
    }
    handleLibrarySave(e:any):void {
        this.http
            .post('../app/mockData/tableDatas.json')
            .toPromise()
            .then((response) => {
                that.infoDatas = response.json();
            })
    }

}
