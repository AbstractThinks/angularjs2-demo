import {
    Injectable,

} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class Service {

    private inputSource = new Subject<string>();
    private outputSource = new Subject<string>();

    input$ = this.inputSource.asObservable();
    output$ = this.outputSource.asObservable();

    inputMission(mission:string):void {
        this.inputSource.next(mission);
    }
    outputMission(mission:string):void {
        this.outputSource.next(mission);
    }

    constructor() {

    }

}
