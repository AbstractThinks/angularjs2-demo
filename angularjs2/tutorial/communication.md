#Communication


##通过`@input`</font>把数据从父组件传到子组件

```javascript

//HeroChildComponent.js

import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input() hero: Hero;
  @Input('master') masterName: string;//指定别名，不推荐这种写法
}

//HeroParentComponent.js

import { Component } from '@angular/core';
import { HeroChildComponent } from './hero-child.component';
import { HEROES } from './hero';
@Component({
  selector: 'hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </hero-child>
  `,
  directives: [HeroChildComponent]
})
export class HeroParentComponent {
  heroes = HEROES;
  master: string = 'Master';
}

```


##子组件通过`setter`处理父组件传入的值

```javascript
//NameChildComponent.js

import { Component, Input } from '@angular/core';
@Component({
  selector: 'name-child',
  template: `
    <h3>"{{name}}"</h3>
  `
})
export class NameChildComponent {
  _name: string = '<no name set>';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name() { return this._name; }
}


//NameParentComponent.js

import { Component } from '@angular/core';
import { NameChildComponent } from './name-child.component';
@Component({
  selector: 'name-parent',
  template: `
    <h2>Master controls {{names.length}} names</h2>
    <name-child *ngFor="let name of names"
      [name]="name">
    </name-child>
  `,
  directives: [NameChildComponent]
})
export class NameParentComponent {
  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];
}
```

##子组件使用`ngOnChanges`拦截输入属性值的变化

```
当需要监视多个、交互式输入属性的时候，本方法比用属性的setter更合适
```

```javascript

//children.js

import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      log.push( `${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(', '));
  }
}

//parent.js
import { Component } from '@angular/core';
import { VersionChildComponent } from './version-child.component';
@Component({
  selector: 'version-parent',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <version-child [major]="major" [minor]="minor"></version-child>
  `,
  directives: [VersionChildComponent]
})
export class VersionParentComponent {
  major: number = 1;
  minor: number = 23;
  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
```




##父组件监听子组件的事件

```
子组件暴露一个EventEmitter属性，当事件发生时，子组件利用该属性emits(向上弹射)事件。
父组件绑定到这个事件属性，并在事件发生时作出回应。
```

```javascript

//children.js

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'my-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterComponent {
  @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}


//parent.js

import { Component }      from '@angular/core';
import { VoterComponent } from './voter.component';
@Component({
  selector: 'vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <my-voter *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </my-voter>
  `,
  directives: [VoterComponent]
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}

```



##父组件与子组件通过本地变量local variable互动

在父组件中引用子组件时并为子组件添加`#time`属性，这样在父组件中可以通过`time`对象访问子组件,仅限在模版中调用，通过这种方式在类中不可以调用子组件

```javascript

//children.js

import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;
  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}

//parent.js
import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';
@Component({
  selector: 'countdown-parent-lv',
  template: `
	  <h3>Countdown to Liftoff (via local variable)</h3>
	  <button (click)="timer.start()">Start</button>
	  <button (click)="timer.stop()">Stop</button>
	  <div class="seconds">{{timer.seconds}}</div>
	  <countdown-timer #timer></countdown-timer>
  `,
  directives: [CountdownTimerComponent],
  styleUrls: ['demo.css']
})
export class CountdownLocalVarParentComponent { }

//在父组件中引用子组件时并为子组件添加`#time`属性，这样在父组件中可以通过`time`对象访问子组件
```


##父组件调用ViewChild

1.通过`ViewChild`装饰器导入这个引用，并挂上`AfterViewInit`生命周期钩子

```javascript

//children.js

import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;
  clearTimer() { clearInterval(this.intervalId); }
  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}

//parent.js

import { AfterViewInit, ViewChild } from '@angular/core';
import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';
@Component({
  selector: 'countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <countdown-timer></countdown-timer>
  `,
  directives: [CountdownTimerComponent],
  styleUrls: ['demo.css']
})
export class CountdownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;
  seconds() { return 0; }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
```

##父组件和子组件通过服务来通讯（双向通信）

通过`MissionService`把`MissionControlComponent`和多个`AstronautComponent`子组件连接起来

```
1.MissionControlComponent提供服务的实例，
并将其共享给它的子组件(通过providers元数据数组)，
子组件可以通过构造函数将该实例注入到自身。

2.AstronautComponent也通过自己的构造函数注入该服务。
由于每个AstronautComponent都是MissionControlComponent的子组件，
所以它们获取到的也是父组件的这个服务实例。
```


```javascript

//missionservice.js

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MissionService {
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}

//MissionControlComponent.js

import { Component }          from '@angular/core';
import { AstronautComponent } from './astronaut.component';
import { MissionService }     from './mission.service';
@Component({
  selector: 'mission-control',
  template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <my-astronaut *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </my-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  directives: [AstronautComponent],
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }
  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}

//AstronautComponent.js

import { Component, Input, OnDestroy } from '@angular/core';
import { MissionService } from './mission.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'my-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        Confirm
      </button>
    </p>
  `
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
```

