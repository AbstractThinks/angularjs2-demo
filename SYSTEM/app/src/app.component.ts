import {
	Component,
	OnInit,
	ViewChild,
	AfterViewInit
}  from '@angular/core';

@Component({
    selector: 'my-app',
    template:  `<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit, AfterViewInit { 
	constructor() {
		$('.pusher').dimmer('show')
	}

	ngOnInit():void {
		
	}
	ngAfterViewInit(): void {
		$('.pusher').dimmer('hide')
	}
}
