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

        template: 'I am fron {{test}}'

    })

export class ChildComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

    @Input()
    test:string;

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
