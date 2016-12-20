import {
    Component,
    AfterViewChecked,
}     from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import { Http } from '@angular/http';
@Component({
  templateUrl: './detailed.html',
  // directives: [FooterComponent]
})
export class DetailedComponent implements AfterViewChecked{
    infoDatas:any = [];
    constructor(private http: Http) {
        this.http
            .get('../app/mockData/tableDatas2.json')
            .toPromise()
            .then((response) => {
                this.infoDatas = response.json();
            });

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
        this.http
            .get('../app/mockData/tableDatas.json')
            .toPromise()
            .then((response) => {
                this.infoDatas = response.json();
            })
    }
    ngAfterViewChecked():void {
        $('tr.transition.hidden').transition('fly left');
    }

}
