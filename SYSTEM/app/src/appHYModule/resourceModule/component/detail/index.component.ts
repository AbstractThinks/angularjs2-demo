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
    article: any = {};
    comments: any = [];
    commentText: any = "";
    constructor(
        private urlService: UrlService,
        private router: Router,
        private aRoute: ActivatedRoute,
    ) {
        // 相当于window.location.href，界面跳转
        // console.log(router.navigateByUrl('hy/resource/detail/36'));
    }
    ngOnInit() {
        
    }
    addComment() {
      let that = this;
      let articleId = "";
      this.aRoute.params.subscribe((params) => {
        articleId = params.id;
      });
      let reqObj = {
        content: that.commentText,
        parentCommentId: articleId,
        rootId: articleId,
        rootType: 1
      }
      this.urlService.hy_req_post(`api/comment/add?content=${that.commentText}&parentCommentId=${articleId}&rootId=${articleId}&rootType=1`, that.commentText).then((response:any) => {
        that.comments.push(response.json());
        that.commentText = "";
      })
    }
    failedExamine() {
      let that = this;
      let articleId = "";
        this.aRoute.params.subscribe((params) => {
        articleId = params.id;
      });
      let reqData = {
        status:3,
        id:articleId
      }
      this.urlService.hy_req_post(`api/resources/resource/3/${articleId}`, reqData).then((response:any) => {
        
        console.log("审核失败")
      }) 
    }
    passExamine() {
       let that = this;
        let articleId = "";
          this.aRoute.params.subscribe((params) => {
          articleId = params.id;
        });
        let reqData = {
          status:2,
          id:articleId
        }
       this.urlService.hy_req_post(`api/resources/resource/2/${articleId}`, reqData).then((response:any) => {
        console.log("审核通过")
      }) 
    }
    collection() {
      let that = this;
      let articleId = "";
        this.aRoute.params.subscribe((params) => {
        articleId = params.id;
      }); 
      this.urlService.hy_req_post(`api/resources/favorite/${articleId}`, {resourceId:articleId}).then((response:any) => {
        console.log("搜藏成功")
      })       
      
    }
    download() {

    }
    previewPage() {
      this.page = this.page - 1;
    }
   nextPage() {
     console.log(this.page)
      this.page = this.page + 1;
    }
    ngAfterViewInit() {
       let that = this;
       let articleId = "";
       this.aRoute.params.subscribe((params) => {
           articleId = params.id;
        });
       this.urlService.hy_req_get(`api/resources/${articleId}`).then((response:any) => {
            that.article= response.json();
            console.log(response.json())
        })
       this.urlService.hy_req_get(`api/comment/list}?rootId=${articleId}&rootType=1`).then((response:any) => {
            that.comments= response.json();
            console.log(response.json())
        })
    }
}
