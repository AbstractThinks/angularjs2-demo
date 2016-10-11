#pipe
##内置管道及使用

```javascript
例如：DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe、PercentPipe

import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
```

##自定义管道

```javascript

//pipe.js

import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

//component.js

import { Component } from '@angular/core';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
@Component({
  selector: 'power-booster',
  template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
  pipes: [ExponentialStrengthPipe]
})
export class PowerBoosterComponent { }

```

##纯(pure)管道与非纯(impure)管道

能不使用非纯管道就不使用非纯管道

```javascript

@Pipe({
  name: 'flyingHeroes',
  pure: false
})

通过设置参数pure将管道设置为非纯管道
非纯管道：可能会被调用很多次，和每个按键或每次鼠标移动一样频繁。
纯管道：Angular会忽略(复合)对象内部的更改。如果我们更改了输入日期(Date)中的月份、往一个输入数组(Array)中添加新值或者更新了一个输入对象(Object)的属性，Angular都不会调用纯管道。

```

```javascript

//FlyingHeroesPipe.js

import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from './heroes';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}


//FlyingHeroesImpurePipe.js

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}

```

##AsyncPipe
AsyncPipe接受一个Promise或Observable作为输入，并且自动订阅这个输入，最终返回它们给出的值。

```javascript

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'hero-message',
  template: `
    <h2>Async Hero Message and AsyncPipe</h2>
    <p>Message: {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>`,
})
export class HeroAsyncMessageComponent {
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  constructor() { this.resend(); }
  resend() {
    this.message$ = Observable.interval(500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}


```


