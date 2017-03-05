import {
	Component,
	AfterViewInit
} from '@angular/core';
import {BaseData} from '../../../../../mockData/baseData';
@Component({
  selector: 'content-index-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class ContentIndexComponent {
	cities:any = [

	]
	basedata:any = BaseData
	constructor() {
		
	}
	ngAfterViewInit(): void {
		// console.log(Swiper)
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        effect: 'coverflow',
	        grabCursor: true,
	        centeredSlides: true,
	        slidesPerView: '3',
	        coverflow: {
	            rotate: 50,
	            stretch: 0,
	            depth: 100,
	            modifier: 1,
	            slideShadows : true
	        }
	    });
	}
}
