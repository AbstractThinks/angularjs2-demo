import {Component} from '@angular/core';

@Component({
  selector: 'detailed-component',
  templateUrl:  './detailed.component.html',
  // directives: [],
})
export class DetailedComponent {
	pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  	page: number = 1;
}
