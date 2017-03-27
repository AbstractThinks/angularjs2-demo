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

    constructor() {}
    urlEncode(param?:any, key?:any, encode?:any):string {
      if(param==null) return '';
      var paramStr = '';
      var t = typeof (param);
      if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
      } else {
        for (var i in param) {
          var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
          paramStr += this.urlEncode(param[i], k, encode);
        }
      }
      return paramStr;
    }
}