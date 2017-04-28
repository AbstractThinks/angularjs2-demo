import { 
	Directive,
	TemplateRef, 
	ViewContainerRef,
	Input 
} from '@angular/core';

@Directive({
  selector: '[appMyNewDirective]'
})
export class MyNewDirectiveDirective {

  constructor(
  	private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() 
  set appMyNewDirective(condition: boolean) {
  	console.log(condition)
    if (!condition) {
    	// console.log(this.templateRef)
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
