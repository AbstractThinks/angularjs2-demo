import {
	Component,
	ViewChild,
  AfterViewInit
} from '@angular/core';
import {
	Router,
	ActivatedRoute,
	Params
} from "@angular/router";
import { UrlService } from '../../../../appServiceModule/urlService.component';

@Component({
  selector: 'hy-personal-other-container',
  templateUrl:  `./index.html`,
  // directives: [],
})

export class HYPersonalOtherComponent {
	students:any = {};
	parents:any = {};
	statistics:any = {};
	constructor (
		private urlService: UrlService,
		public router: Router,
	 	private aRoute: ActivatedRoute
	) {
		let that = this;
		this.urlService.req_get('student.json').then((response:any) => {
			that.students = response.json().data;
			that.parents = response.json().data;
			that.statistics = response.json().data;
		});
	}
	ngOnInit() {
        this.aRoute.params.subscribe((params) => {
            console.log(params)
        });
    };
	ngAfterViewInit(): void {

	}
}
