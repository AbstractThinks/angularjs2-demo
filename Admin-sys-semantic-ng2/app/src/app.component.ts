import {
	Component,
	OnInit,
	ViewChild,
	ngAfterViewInit
}  from '@angular/core';

@Component({
    selector: 'my-app',
    template:  `<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit { 
	constructor() {
		$('.pusher').dimmer('show')
	}

	ngOnInit():void {
		
	}
	ngAfterViewInit(): void {
		$('.pusher').dimmer('hide')
	}
}
