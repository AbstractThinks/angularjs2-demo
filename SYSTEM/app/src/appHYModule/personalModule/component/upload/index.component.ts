import {
	Component,
	ViewChild,
	OnInit,
  AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-personal-upload-container',
  templateUrl:  `./index.html`,
})
export class HYPersonalUploadComponent implements OnInit, AfterViewInit {
	SCHOOLSDICTIONARY:any=[];
	SUBJECTSDICTIONARY:any=[];
	GRADESDICTIONARY:any={};
	TYPESDICTIONARY:any=[];
    DATA:any={};
	constructor (private urlservice: UrlService, private _hyservice: HYService) {
		let that = this;
		this.urlservice.hy_req_get("api/schools?page=1").then((response:any) => {
            that.SCHOOLSDICTIONARY = response.json();
            // setTimeout(() => {$('.ui.dropdown.SCHOOLSDICTIONARY').dropdown()}, 0);
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
            // setTimeout(() => {$('.ui.dropdown.SUBJECTSDICTIONARY').dropdown()}, 0);
        });
        this.urlservice.hy_req_get("api/dynamicenum/1028").then((response:any) => {
            that.GRADESDICTIONARY = response.json();
            // setTimeout(() => {$('.ui.dropdown.GRADESDICTIONARY').dropdown()}, 0);
        });
        this.urlservice.hy_req_get("api/resources/listAllResourceTypes}").then((response:any) => {
        	let arr:Array<number> = response.json();
        	arr.pop();
            that.TYPESDICTIONARY = arr;
            // setTimeout(() => {$('.ui.dropdown.TYPESDICTIONARY').dropdown()}, 0);
        });
	}
    handleSaveData(): void {
        console.log(this.DATA);
    }
	ngOnInit(): void {
	}
	ngAfterViewInit(): void {
        let fileUpload = $("#file-upload").semanticFileUploader({
            defaultText: "上传文件",
            defaultLabel: "点击选择文件或者将文件拖入此区域",
            loadingText: "上传文件中...",
            successText: "上传成功",
            onDrop: function(file:any){
                //File object => https://developer.mozilla.org/en-US/docs/Web/API/File
                console.log(file.name);
                
                // Upload your file using the method you prefer (ex: $.ajax) and call 
                // the method finishUpload() as soon as your upload is finished;
                setTimeout(function(){
                    fileUpload.uploadFinished();
                }, 3000);
            }
        });    
	}
}
