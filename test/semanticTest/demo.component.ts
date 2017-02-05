import { Component } from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
// import { NgSemanticModule } from 'ng-semantic';

@Component({
 selector: 'demo-semantic-cmp',
 // template: '<sm-segment class="raised">Hello</sm-segment>'
  template:`<sm-menu title="Angular2" class="inverted teal" logo="/assets/images/semantic.png">
    <a sm-item *ngFor="let item of items" [icon]="item.icon">test</a>

    <sm-menu class="menu right secondary">
        <a sm-item href="#/elements/menu"
            image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu</a>
        <a sm-item icon="sidebar big"></a>
    </sm-menu>
</sm-menu>`
})

export class DemoSemanticComponent {}
