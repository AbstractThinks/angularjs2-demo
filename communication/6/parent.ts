import {
    Component,
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

    selector: 'parent',

    template: '<child></child><button id="input" (click)="click()">click for input</button>',

    providers: [Service]

})

export class ParentComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

    constructor(private _service: Service) {

        this._service.output$.subscribe(function (output: string) {

            console.log("this is output: "+ output);

        });

    }

    click() {

        this._service.inputMission('i am from parent');

    }

    output($event:any):void {
        console.log($event);
    }


    ngOnInit(){
        console.log('parent onInit');
    }
    ngOnDestroy(){
        console.log('parent OnDestroy')
    }
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
        console.log('parent ngOnChanges',changes)
    }
    ngAfterContentInit(){
        console.log('parent AfterContentInit')
    }
    ngAfterContentChecked(){
        console.log('parent AfterContentChecked')
    }
    ngAfterViewInit(){
        console.log('parent AfterViewInit')
    }
    ngAfterViewChecked(){
        console.log('parent AfterViewChecked')
    }


}
