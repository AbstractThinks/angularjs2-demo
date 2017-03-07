import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';

@Component({
  selector: 'growthfile-component',
  templateUrl:  './growthfile.component.html',
})
export class GrowthFileComponent implements AfterViewInit  {
	handleClick(e:any): void {
		if ($(e.target).parents('.shape')) {
			$(e.target).parents('.shape').shape('flip up')
		}
	}
	ngAfterViewInit(): void {
		
	}
}
