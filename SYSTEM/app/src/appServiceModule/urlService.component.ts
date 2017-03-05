import {Injectable} from '@angular/core';

@Injectable()
export class UrlService {
    urlEncode(param:any, key?:any, encode?:any): string {
		if(param==null) return '';
			var paramStr = '';
			var t = typeof (param);
			if (t == 'string' || t == 'number' || t == 'boolean') {
			paramStr += '&' + key + '=' + ((encode==null||encode) ? param : param);
		} else {
			for (var i in param) {
				var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
				paramStr += this.urlEncode(param[i], k, encode);
			}
		}
		return paramStr;
    }
    
}