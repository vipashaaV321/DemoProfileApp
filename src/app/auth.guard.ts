import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {NgClass} from '@angular/common';

import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private rut:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(sessionStorage.getItem('islogin')==undefined){
        this.rut.navigate(['/']);
        return false;
        
      }
      else{
        return true;
      }
    
  }
  isloggedin(){
    if(sessionStorage.getItem('islogin') && sessionStorage.getItem('sid')){
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.removeItem('islogin');
    
  }

  }
  

