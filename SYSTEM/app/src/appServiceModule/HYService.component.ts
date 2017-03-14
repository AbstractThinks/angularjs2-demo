import {
    Injectable,

} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class HYService {

    private PersonalInputSource = new Subject<string>();
    private PersonalOutputSource = new Subject<string>();
    PersonalInput$ = this.PersonalInputSource.asObservable();
    PersonalOutput$ = this.PersonalOutputSource.asObservable();
    PersonalInputMission(mission:string):void {
        this.PersonalInputSource.next(mission);
    }
    PersonalOutputMission(mission:string):void {
        this.PersonalOutputSource.next(mission);
    }

    constructor() {

    }

}