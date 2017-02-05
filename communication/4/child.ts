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
    OnDestroy} from '@angular/core';


    @Component({

        selector: 'child',

        template: `

            I am fron {{_input}}<br />

            <button id="out" (click)="click()">click for out</button>

        `

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

    @Output()
    output:EventEmitter<string> = new EventEmitter<string>();

    click(){
        this.output.emit("i am from child");
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
