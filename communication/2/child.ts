import {
    Component,
    Input,
    OnChanges,
    SimpleChange,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy} from '@angular/core';


    @Component({

        selector: 'child',

        template: 'I am from {{_input}}'

    })

export class ChildComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

    _input:string;

    @Input()
    public set test(v : string) {

        this._input = v;
        console.log(v);

    }
    public get test() : string {
        return this._input;
    }

    constructor() { }

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
