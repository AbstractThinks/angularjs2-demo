import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../appServiceModule/urlService.component';
import { HYPersonalIndexComponent } from './component/index/index.component';
import { HYPersonalUploadComponent } from './component/upload/index.component';

@Component({
  selector: 'hy-personal-module-container',
  templateUrl:  `./personal.html`,
  
})
export class HYPersonalModuleComponent implements AfterViewInit{
	SCHOOLSDICTIONARY:any=[];
	SUBJECTSDICTIONARY:any=[];
	GRADESDICTIONARY:any=[];
	TYPESDICTIONARY:any=[];


	constructor( private urlservice: UrlService) {
		
		let that = this;
		

	}
	ngAfterViewInit():void {
		let that = this;
		
	}
}
