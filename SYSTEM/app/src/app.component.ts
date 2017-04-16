import {
	Component,
	OnInit,
	ViewChild,
	AfterViewInit
}  from '@angular/core';
import {UrlService} from './appServiceModule/urlService.component';

@Component({
    selector: 'my-app',
    template:  `<router-outlet></router-outlet>`,
    providers: [UrlService],
})

export class AppComponent implements OnInit, AfterViewInit { 
	constructor() {
		$('.pusher').dimmer('show');
		toastr.options.positionClass = "toast-top-full-width";
		toastr.options.timeOut = 10;
	}

	ngOnInit():void {
		
	}
	ngAfterViewInit(): void {
		$('.pusher').dimmer('hide')
	}
}
