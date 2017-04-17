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
	staffId:string
	userId:string
	staff:any = {}
	resources:any = {}
	constructor (
		private urlservice: UrlService,
		public router: Router,
	 	private aRoute: ActivatedRoute
	) {
		this.aRoute.params.subscribe((params) => {
	        this.staffId = params.id;

			this.urlservice.hy_req_get(`api/staff/${this.staffId}`).then((response:any) => {
				this.staff = response.json();
				this.userId = response.json().userId;
				this.urlservice.hy_req_get(`api/resources/user/${response.json().userId}/1/10`).then((responselist:any) => {
					this.resources = responselist.json();
					console.log(response.json())
				});
			});


	        
	    });
		
	}
	ngOnInit() {

    }
	ngAfterViewInit(): void {

	}
	onFirstHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/1/10`).then((responselist:any) => {
			this.resources = responselist.json();
		});
    }
    onLastHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.resources.totalPage}/10`).then((responselist:any) => {
			this.resources = responselist.json();
		});
    }
    onNextHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.resources.pageNumber+1}/10`).then((responselist:any) => {
			this.resources = responselist.json();
		});
    }
    onPreviousHandler(e:any): void {
        this.urlservice.hy_req_get(`/api/resources/user/${this.userId}/${this.resources.pageNumber-1}/10`).then((responselist:any) => {
			this.resources = responselist.json();
		});
    }
}
