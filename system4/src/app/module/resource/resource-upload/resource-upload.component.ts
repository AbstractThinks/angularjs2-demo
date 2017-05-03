import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var $:any;
declare var WebUploader:any;


@Component({
  selector: 'app-resource-upload',
  templateUrl: './resource-upload.component.html',
  styleUrls: ['./resource-upload.component.css']
})
export class ResourceUploadComponent implements OnInit {
  dragOver: boolean = true;
  uploader:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  	//初始化
 	this.uploader = WebUploader.create({

	    server: 'http://webuploader.duapp.com/server/fileupload.php',
	    pick: '#picker',
	    resize: false
	});
 	// 添加文件
	this.uploader.on( 'fileQueued', function( file ) {
	    $('.uploader-list').append( '<div id="' + file.id + '" class="item">' +
	        '<h4 class="info">' + file.name + '</h4>' +
	        '<p class="state">等待上传...</p>' +
	    '</div>' );
	});
	// 进度条
	this.uploader.on( 'uploadProgress', function( file, percentage ) {
	    var $li = $( '#'+file.id ),
	        $percent = $li.find('.progress .progress-bar');

	    // 避免重复创建
	    if ( !$percent.length ) {
	        $percent = $('<div class="progress progress-striped active">' +
	          '<div class="progress-bar" role="progressbar" style="width: 0%">' +
	          '</div>' +
	        '</div>').appendTo( $li ).find('.progress-bar');
	    }

	    $li.find('p.state').text('上传中');
	    $percent.css( 'width', percentage * 100 + '%' );
	});
	this.uploader.on( 'uploadSuccess', function( file ) {
	    $( '#'+file.id ).find('p.state').text('已上传');
	});

	this.uploader.on( 'uploadError', function( file ) {
	    $( '#'+file.id ).find('p.state').text('上传出错');
	});

	this.uploader.on( 'uploadComplete', function( file ) {
	    $( '#'+file.id ).find('.progress').fadeOut();
	});

  }

  startUpload() {
  	console.log("...start upload")
  	this.uploader.upload();
  }
}
