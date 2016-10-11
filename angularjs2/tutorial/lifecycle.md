#生命周期
##生命周期的钩子

###适用于指令和组件
|钩子|用途|
|----------------|---|
| `ngOnInit` | 当Angular初始化完数据绑定的输入属性后，用来初始化指令或组件。|
| `ngOnChanges` |当Angular设置了一个被绑定的输入属性后触发。该回调方法会收到一个包含当前值和原值的changes对象。|
| `ngDoCheck` |用来监测所有变化(无论是Angular本身能检测的还是无法检测的)，并作出相应行动。在每次执行“变更检测”时被调用。|
| `ngOnDestroy` | 在Angular销毁指令或组件之前做一些清理工作，比如退订可观察对象和移除事件处理器，以免导致内存泄露。|

###只适用于组件
|钩子|用途|
|----------------|---|
| `ngAfterContentInit ` | 当Angular把外来内容投影进自己的视图之后调用。|
| `ngAfterContentChecked` |当Angular设置了一个被绑定的输入属性后触发。该回调方法会收到一个包含当前值和原值的changes对象。|
| `ngAfterViewInit` |在Angular创建完组件的视图后调用。|
| `ngAfterViewChecked` | 在Angular检查完组件视图中的绑定后调用。|

###生命周期的顺序
|钩子|调用时机|
|----------------|---|
| `ngOnChanges ` | 当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit之前。|
| `ngOnInit` | 在第一轮ngOnChanges完成之后调用。 (译注：也就是说当每个输入属性的值都被触发了一次ngOnChanges之后才会调用ngOnInit，此时所有输入属性都已经有了正确的初始绑定值)。|
| `ngDoCheck` |在每个Angular变更检测周期中调用。|
| `ngAfterContentInit` | 当把内容投影进组件之后调用。|
| `ngAfterContentChecked` | 每次完成被投影组件内容的变更检测之后调用。|
| `ngAfterViewInit` | 初始化完组件视图及其子视图之后调用。|
| `ngAfterViewChecked` | 每次做完组件视图和子视图的变更检测之后调用。|
| `ngOnDestroy` | 当Angular每次销毁指令/组件之前调用。|


	

##钩子的调用顺序
##其他angular生命周期钩子

