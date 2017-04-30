import { Directive, ElementRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[appMyNewAttribute]'
})
export class MyNewAttributeDirective {
	@Input('highlightColor') color: string;

	constructor(private el: ElementRef, private renderer: Renderer){
		el.nativeElement.style.color = 'yellow';
		console.log(el.nativeElement)
	}

}
