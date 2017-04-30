import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	console.log('AuthGuard#canActivate called')
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  	console.log('AuthGuard#canChildActivate called')
  	if (state.url === "/app/login/page") {
  		document.getElementById("toolbar").style.display="none";
  	} else {
  		document.getElementById("toolbar").style.display="block";
  	}
    return true;
  }
}
