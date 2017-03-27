import {
	Component,
	OnInit,
	AfterViewInit
} from '@angular/core';
import {
	Router,
	ActivatedRoute,
	Params
} from "@angular/router";
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-resource-detail-container',
  templateUrl:  `./index.html`,
})
export class HYResourceDetailComponent implements OnInit,AfterViewInit{
    pdfSrc: string = '../../../../../../vendor/js/pdf/compressed.tracemonkey-pldi-09.pdf';
    page: number = 1;
	 constructor(
	 	private urlService: UrlService,
	 	private router: Router,
	 	private aRoute: ActivatedRoute,
	 ) {
    // 相当于window.location.href，界面跳转
        // console.log(router.navigateByUrl('hy/resource/detail/36'));
    }
    ngOnInit() {
        this.aRoute.params.subscribe((params) => {
            console.log(params)
        });
    };
    ngAfterViewInit() {
       
    }
}
