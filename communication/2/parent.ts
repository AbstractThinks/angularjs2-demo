import {
    Component,
    OnChanges,
    SimpleChange,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy} from '@angular/core';


@Component({

    selector: 'parent',

    template: '<child [test]="data"></child>'

})

export class ParentComponent implements OnChanges, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

    data: string;

    constructor() { }

    ngOnInit(){
        console.log('parent onInit');
        this.data = "parent1";
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
