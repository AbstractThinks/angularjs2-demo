#injection

##应用程序全局依赖（全局注入）

通过`@Component`元数据的`providers`数组导入和注册了几个服务

1.通过`@Component`元数据的`providers`数组导入和注册了几个服务

2.在子组件construct方法中注入使用

```javascript
import { LoggerService }      from './logger.service';
import { UserContextService } from './user-context.service';
import { UserService }        from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: DIRECTIVES,
  providers: [LoggerService, UserContextService, UserService]
})
export class AppComponent {
/* . . . */
}

//app/hero-bios.component.ts (component constructor injection)
//在组件中注入使用
constructor(logger: LoggerService) {
  logger.logInfo('Creating HeroBiosComponent');
}

//app/user-context.service.ts (service constructor injection)
//在组件中注入使用
constructor(private userService: UserService, private loggerService: LoggerService) {
}

```

##外部模块配置

##@Injectable和嵌套服务的依赖

@Injectable()装饰器只在一个服务类有自己的依赖的时候，才是不可缺少的
建议所有服务都添加

```javascript
@Injectable()
export class UserContextService {
  constructor(private userService: UserService, private loggerService: LoggerService) {
  }
}
```

##把服务作用范围限制到一个子组件树

通过`@Component`元数据的`providers`数组导入和注册了几个服务

1.通过`@Component`元数据的`providers`数组导入和注册了几个服务

2.在组件constructor方法中注入使用

```javascript

@Component({
  selector: 'unsorted-heroes',
  template: `<div *ngFor="let hero of heroes">{{hero.name}}</div>`,
  providers: [HeroService]
})
export class HeroesBaseComponent implements OnInit {
  constructor(private heroService: HeroService) { }
}

```

##多个服务实例
##使用@Optional和@Host装饰器来限定依赖查找方式

`@Host()`函数是`heroCache`属性的装饰器，确保我们从其父组件`HeroBioComponent`得到一个缓存服务。如果该父组件不存在这个服务，Angular就会抛出错误，即使组件树里的再上级有某个组件拥有这个服务，Angular也会抛出错误。

另一个`@Host()`函数是属性`loggerService`的装饰器，我们知道在应用程序中，只有一个`LoggerService`实例，也就是在`AppComponent`级提供的服务。 该宿主`HeroBioComponent`没有自己的LoggerService供应商。

如果我们没有同时使用`@Optional()`装饰器的话，Angular就会抛出错误。多亏了`@Optional()`，Angular把`loggerService`设置为null，并继续执行组件而不会抛出错误。


```javascript

@Component({
  selector: 'hero-contact',
  template: `
  <div>Phone #: {{phoneNumber}}
  <span *ngIf="hasLogger">!!!</span></div>`
})
export class HeroContactComponent {
  hasLogger = false;
  constructor(
      @Host() // limit to the host component's instance of the HeroCacheService
      private heroCache: HeroCacheService,
      @Host()     // limit search for logger; hides the application-wide logger
      @Optional() // ok if the logger doesn't exist
      private loggerService: LoggerService
  ) {
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('HeroContactComponent can log!');
    }
  }
  get phoneNumber() { return this.heroCache.hero.phone; }
}

```

##注入组件的DOM元素
##使用供应商定义依赖
##供应商可选令牌
##注入到一个派生类
##通过注入来查找父组件