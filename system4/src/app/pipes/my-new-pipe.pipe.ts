import { Pipe, PipeTransform } from '@angular/core';

/*
  * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({
  name: 'myNewPipe'
})
export class MyNewPipePipe implements PipeTransform {

  transform(value: number, args?: any): number {
  	console.log(args)
    return value*10;
  }

}
