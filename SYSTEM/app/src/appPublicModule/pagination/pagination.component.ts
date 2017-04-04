import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
  selector: 'pagination-container',
  templateUrl:  `./pagination.html`,
  // directives: [],
})
export class PaginationComponent {
	@Input() pageNumber?:any = "";
	@Input() hasNext?:any = false;
	@Input() hasPrevious?:any = false;
	
	@Output() onFirst = new EventEmitter<number>();
	@Output() onLast = new EventEmitter<number>();
	@Output() onNext = new EventEmitter<number>();
	@Output() onPrevious = new EventEmitter<number>();
    constructor () {
    	console.log()
    }
    goFirst(): void{
    	this.onFirst.emit();
    }
    goLast(): void{
    	this.onLast.emit();
    }
    goNext(): void{
    	this.onNext.emit();
    }
    goPrevious(): void{
    	this.onPrevious.emit();
    }
}