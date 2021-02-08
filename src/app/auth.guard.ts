import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllService } from './all.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _ser:AllService, private _r:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let routeurl=state.url;
      return this.isLogin(routeurl);
  }

  isLogin(routeurl){
    if(this._ser.isLogin()){
      return true;
    }else{
      return false;
    }

  this._ser.redirectUrl = routeurl;
  this._r.navigate(['/login'],{queryParams:{returnUrl:routeurl}});
  }
}
