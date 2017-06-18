import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
declare var dragula:any;
@Component({
  selector: 'hy-shedule-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYSheduleIndexComponent {
	students:any = {};
	parents:any = {};
	statistics:any = {};
	constructor (private urlService: UrlService) {

	}
	ngAfterViewInit(): void {
		dragula([
			$('#monday').get(0), 
			$('#tuesday').get(0),
			$('#wednesday').get(0),
			$('#thursday').get(0),
			$('#friday').get(0),
			$('#saturday').get(0),
			$('#sunday').get(0)]);
		// setTimeout( () => {$('.tabular.menu .item').tab();}, 100)
		$('.sheduleTab .menu .item').on('click', function (e) {
			$('.sheduleTab .item.active').removeClass('active');
			$(`.sheduleTab .item.${$(e.target).data("tab")}`).addClass('active');
		});
		$('.ui.accordion').accordion({
			'exclusive': false
		});
		
	}
}
