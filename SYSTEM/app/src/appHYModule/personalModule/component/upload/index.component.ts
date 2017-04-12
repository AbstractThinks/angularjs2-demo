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
        })
        this.urlservice.hy_req_get("api/subjects?page=1").then((response:any) => {
            that.SUBJECTSDICTIONARY = response.json();
        });
        this.urlservice.hy_req_get("api/dynamicenum/1028").then((response:any) => {
            that.GRADESDICTIONARY = response.json();
        });
        this.urlservice.hy_req_get("api/resources/listAllResourceTypes}").then((response:any) => {
        	let arr:Array<number> = response.json();
        	arr.pop();
            that.TYPESDICTIONARY = arr;
        });
	}
    handleSaveData(): void {

        let that = this;
        this.DATA.fileId = $("#file-upload").attr('fileId');
        this.DATA.resourceName = $("#file-upload").attr('fileName');
        let urlParam = this._hyservice.urlEncode(this.DATA).substring(1);
        this.urlservice.hy_req_post(`api/resources/resourceUpload?${urlParam}`, this.DATA).then((response:any) => {
            // that.staff = response.json();
        });
    }
	ngOnInit(): void {
	}
	ngAfterViewInit(): void {
        let that = this;
        let fileUpload = $("#file-upload").semanticFileUploader({
            defaultText: "上传文件",
            defaultLabel: "点击选择文件或者将文件拖入此区域",
            loadingText: "上传文件中...",
            successText: "上传成功",
            onDrop: function(file:any){
                var formData = new FormData();
                let suffix = file.name.substring(file.name.lastIndexOf("."), file.name.length);
                formData.append("file", file);
                formData.append("name", file.name);
                formData.append("filename", suffix);
                $.ajax({
                    url: 'http://www.marchezvousblue.cn/api/resources/fileUpload',
                    type: 'post',
                    data: formData,
                    async: true,
                    cache: false,
                    processData: false,
                    contentType: false,
                    beforeSend: function() {
                        console.log("正在进行，请稍候");
                    },
                    success: function(responseStr) {
                        console.log(responseStr)
                        fileUpload.uploadFinished($("#file-upload"));
                        $("#file-upload").attr('fileId', responseStr);
                        $("#file-upload").attr('fileName', file.name);
                    },
                    error: function(responseStr) {
                        console.log("error " + responseStr);
                    }
                });
            }
        });    
	}
}
