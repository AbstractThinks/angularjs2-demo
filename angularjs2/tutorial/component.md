#Lifecycle

###a simple example:

```javascript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

// Annotation section
@Component({
  selector: 'my-app',
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyApp {
  constructor() {
    this.name = 'Max';
  }
}

bootstrap(MyApp)
```

###component init

#####ngOnInit
当一个组件被创建，它的`constructor`方法被调用。在constructor方法中我们可以初始化state数据，但是如果组件的属性或数据来自子组件，我们则需要等待子组件先初始化

```javascript
import {Component, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'street-map',
  template: '<map-window></map-window><map-controls></map-controls>'
})
// Component controller
class StreetMap {
  constructor() {
    this.name = 'Max';
  }

  setMapWindow(mapWindow) {
    this.mapWindow = mapWindow;
  }

  setMapControls(mapControls) {
    this.mapControls = mapControls;
  }

  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
  }
}

```



```javascript

// Annotation section
@Component({
  selector: 'street-map',
  template: '<map-window></map-window><map-controls></map-controls>',
})
// Component controller
class StreetMap {
  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
  }
  ngOnDestroy() {
    // Speak now or forever hold your peace
  }
  ngDoCheck() {
    // Custom change detection
  }
  ngOnChanges(changes) {
    // Called right after our bindings have been checked but only
    // if one of our bindings has changed.
    //
    // changes is an object of the format:
    // {
    //   'prop': PropertyUpdate
    // }
  }
  ngAfterContentInit() {
    // Component content has been initialized
  }
  ngAfterContentChecked() {
    // Component content has been Checked
  }
  ngAfterViewInit() {
    // Component views are initialized
  }
  ngAfterViewChecked() {
    // Component views have been checked
  }
}
```



#Component

a simple example:

```javascript
import {
	Component
} from '@angular/core';
	
@Component({
	selector: 'my-component',
	template: '<div>Hello my name is {{name}}</div>'
});
	
export class MyComponent {
  constructor() {
    this.name = 'Max';
  }
  sayMyName() {
    console.log('My name is', this.name);
  }
}
```
		
在html中使用 `<my-component></my-component>` 标签，上面的组件将被创建


#@Inputs

```javascript
import {
	Component,
	Input
} from '@angular/core';

@Component({
	selector: 'user-profile',
	template: '<div>{{user.name}}</div>'
});
export class UserProfile{
	@Input() user;
	constructor(){}
}
```

在组件中使用`@Input` binding to `user`

#@Output

```javascript
import { 
	Component,
	Output,
	EventEmitter
} from 'angular2/core';

@Component({
	selector: 'user-profile',
	template: '<div> Hi, my name is</div>'
})

export class UserProfile{
	@Output() userUpdated = new EventEmitter();
	
	constructor() {
		this.userUpdated.emit(this.user);
	}
}
```

```javascript
<user-profile (userUpdated)="userUpdated($event)"></user-profile>
```


#Events

#Directive

#Routing

###第一步：注入router_providers

```javascript
// bootstrap.ts compiled (using typescript) to bootstrap.js
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(App, [ROUTER_PROVIDERS]);
```

###第二步：在根组件定义路由配置

`<router-outlet></router-outlet>`为路由渲染内容

```javascript
// app.ts compiled (using typescript) to app.js
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home';
import {About} from './about';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES]
  template: `
    <h1>Hello world</h1>

    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    { path: '/', redirectTo: ['Home'] },
    { path: '/home', as: 'Home', component: Home },
    { path: '/about', as: 'About', component: About }
])
export class App {
  constructor() {}
}
```

###第三步：子组件
```javascript
// home.ts
import {Component} from 'angular2/cpre';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'home',
  directives: [ROUTER_DIRECTIVES]
  template: `
    <h2>Home</h2>

    <a [routerLink]="['../About']">Go to about</a>
  `
})
export class Home {
  constructor() {}
}


// about.ts
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'about',
  directives: [ROUTER_DIRECTIVES]
  template: `
    <h2>About</h2>

    <a [routerLink]="['../Home']">Go to home</a>
  `
})
export class About {
  constructor() {}
}
```





#Service

###第一步：创建service
```javascript

// slugifyer.ts
import {Injectable} from 'angular2/core';

@Injectable()
export class Slugifyer {
  slugify(str: String) {
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-')   // Replace multiple - with single -
      .replace(/^-+/, '')       // Trim - from start of text
      .replace(/-+$/, '');
  }
}

```

###第二步：将service作为provider服务交由启动函数（bootstrap）调用

```javascript
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';

import {Slugifyer} from './slugifyer';

bootstrap(App, [
  Slugifyer
]);
```

###第三步：将service注入到组件或service的构造函数中

```javascript
// app.ts
import {Component} from 'angular2/core';
import {Slugifyer} from './slugifyer';

@Component({
  selector: 'app',
  template: `
    <h1>{{ slug }}</h1>
  `
})
export class App {
  slug: string;
  constructor(slugifyer: Slugifyer) {
    this.slug = slugifyer.slugify('My plain text');
  }
}
```

#Pipe


###第一步：创建pipe，一个pipe只是一个含有transform方法的类
```javascript
// truncate.ts
import {Pipe} from 'angular2/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
```

###第二步：使用pipe
```javascript
// app.ts
import {Component} from 'angular2/core';
import {TruncatePipe} from './truncate';

@Component({
  selector: 'app',
  pipes: [TruncatePipe]
  template: `
    <p>{{ 'this is a not so long string' | truncate }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 : '.' }}</p>
  `
})
export class App {
  constructor() {}
}
```

#Template

###binding

```javascript

//单向－－从数据源到视图目标
//第一种方式：
{{expression}}
//第二种方式：
[target] = "expression"
//第三种方式：
bind-target = "expression"

//单向－－从视图目标到数据源
//第一种方式：
(target) = "statement"
//第二种方式：
on-target = "statement"

//双向
//第一种方式：
[(target)] = "expression"
//第二种方式：
bindon-target = "expression"

```






















I