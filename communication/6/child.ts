import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';
import {Service} from './service';

@Component({

    selector: 'child',

    template: `

    <button id="out" (click)="click()">click for output</button>

    `,
    providers:[]

})

export class ChildComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(private _service: Service) {

    this._service.input$.subscribe(function (input: string) {

        console.log("this is input :" + input);

        })

    }

    click() {

        this._service.outputMission('i am from child');

    }




    ngOnInit(){
        console.log('child onInit');
    }

    ngOnDestroy(){
        console.log('child OnDestroy')
    }
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
        console.log('child ngOnChanges',changes)
    }
    ngAfterContentInit(){
        console.log('child AfterContentInit')
    }
    ngAfterContentChecked(){
        console.log('child AfterContentChecked')
    }
    ngAfterViewInit(){
        console.log('child AfterViewInit')
    }
    ngAfterViewChecked(){
        console.log('child AfterViewChecked')
    }

}
