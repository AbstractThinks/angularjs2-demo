import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';
import { UrlService } from '../../../../appServiceModule/urlService.component';
import { HYService  } from '../../../../appServiceModule/HYService.component';

@Component({
  selector: 'hy-personal-index-container',
  templateUrl:  `./index.html`,
})

export class HYPersonalIndexComponent {
	staff:any = {};
	storagestaff:any = {};
	constructor (private urlservice: UrlService, private hyService: HYService) {
		let that = this;
		this.urlservice.hy_req_get('api/staff/50').then((response:any) => {
			that.staff = response.json();
			that.storagestaff = response.json();
			$("#imghead").attr("src", `http://www.marchezvousblue.cn/k12/img/preview/head/${response.json().userId}/${response.json().userId}.png`)
			
		});
	}
	ngAfterViewInit(): void {
		let that = this;
		$('.special .dimmable.image').dimmer({
			on: 'hover'
		});
		$("#imghead").on('error', function () {
			$("#imghead").attr("src", "http://www.marchezvousblue.cn/k12/build/assets/header.png")
		});
		$("#previewImg").on('change', function (e: any) {
			var MAXWIDTH  = 90; 
	        var MAXHEIGHT = 90;
	        var div = document.getElementById('preview');
	        var file = e.target;
	        if (file.files && file.files[0]) {

	            div.innerHTML ='<img id=imghead class="ui small image avatar imghead" style="width: 100%;height: 200px">';
	            var img: any = document.getElementById('imghead');
	            img.onload = function(){
	                var rect = that.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	             }
	            var reader = new FileReader();
	            reader.onload = function(evt: any){
	                img.src = evt.target.result;
	            }
	            reader.readAsDataURL(file.files[0]);

	        } else { //兼容IE 

	            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	            file.select();
	           	let document1:any = document
	            var src = document1.selection.createRange().text;
	            div.innerHTML = '<img id=imghead>';
	            var img: any = document.getElementById('imghead');
	            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	            var rect = that.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
	            div.innerHTML = "<div id=divhead class='ui small image avatar imghead' style=width: 100%;height: 200px;"+sFilter+src+"\"'></div>";

	        }

	    	var formData = new FormData();
            var name = $("#previewImg").val(); 
            let previewImgDom:any = $("#previewImg").get(0);
            formData.append("file", previewImgDom.files[0]);
            formData.append("name", name);
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
                	$.ajax({
                        url: "http://www.marchezvousblue.cn/api/resources/resourceUpload",
                        type: 'post',
                        data: {"resourceTypeId":"101","fileId":responseStr,"resourceName":$("#previewImg").val().substring($("#previewImg").val().lastIndexOf('\\') + 1)},
                        dataType: "json",
                        cache: false,
                        success: function(data) {
                            if (data.error) {

                            } else {
                                // $("#preview").dimmer('hide')
                                // console.log(data)
                            }
                        },
                        error: function(e) {
                        }
                    });
                }
            });   

		});
	}
	handleSaveData():void {
		let that = this;
		let urlParam = this.hyService.urlEncode(this.staff).substring(1);
        this.urlservice.hy_req_post(`api/staff/${that.staff.id}?${urlParam}`, that.staff).then((response:any) => {
            that.staff = response.json();
        });

	}
	handleResetData():void {
		let cloneData = {};
		$.extend(cloneData, this.storagestaff)
		this.staff = cloneData;
	}
	clacImgZoomParam ( maxWidth?:any, maxHeight?:any, width?:any, height?:any ): any{
        var param = {top:0, left:0, width:width, height:height};
        if( width>maxWidth || height>maxHeight ){
            let rateWidth = width / maxWidth;
            let rateHeight = height / maxHeight;
            
            if( rateWidth > rateHeight ){
                param.width =  maxWidth;
                param.height = Math.round(height / rateWidth);
            }else{
                param.width = Math.round(width / rateHeight);
                param.height = maxHeight;
            }
        }
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
    }
    changeHeader():void{
    	$("#previewImg").click();

    	
    }
}
