import {
	Component,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../appServiceModule/urlService.component';

@Component({
  selector: 'cms-container',
  templateUrl:  `./cms.html`,
})
export class CMSComponent implements AfterViewInit{
	  ngAfterViewInit():void {

    }
}
