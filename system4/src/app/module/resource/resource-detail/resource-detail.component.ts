import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
	pdfSrc: string = 'https://emobossemo.github.io/data/demo/pdf-test.pdf';
  	page: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
