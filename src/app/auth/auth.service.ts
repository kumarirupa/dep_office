import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  MenuRequest = new EventEmitter<{}>();
  MasterCompDisplay = new EventEmitter<boolean>();
  PageRefresh = new EventEmitter<boolean>();
  public loggedInStatus=JSON.parse(localStorage.getItem('loggedIn') || 'false')

  setPageRefresh(value:boolean)
  {
    this.PageRefresh.emit(value);
  }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value;
    if(value)
      localStorage.setItem('loggedIn','true');
    else 
      localStorage.setItem('loggedIn','false');
  }

  constructor(private router: Router,private sessionData:SessionStorageService) {}

  getUserDetails(){
    return localStorage.getItem("userDetails");
  } 
  
  // setUserDetails(data){
  //   localStorage.setItem("userDetails", data)
  // }

  removeUserDetails(){
    localStorage.clear();
  }

  Alogin(pagename:string,data:any,menu:any){
    localStorage.setItem("userDetails", data.UserId);
    this.setLoggedIn(true);
   
    this.MenuRequest.emit(menu);
    this.MasterCompDisplay.emit(true);
    this.router.navigate(['/'+pagename]);
  }
  
  logout() {
    this.setLoggedIn(false); 
    this.MasterCompDisplay.emit(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ClearData() {
    this.setLoggedIn(false);    
    this.MasterCompDisplay.emit(false);
    localStorage.clear();
  }

}
