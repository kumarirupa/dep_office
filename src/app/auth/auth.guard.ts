import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { DatabaseService } from '../service/database.service';

@Injectable()
export class AuthGuard implements CanActivate {
  loggedInStatus=false;
  Menustatus=false;
  MenuList:any;
  UserData:any;
  constructor(private authService: AuthService,private dbService: DatabaseService,private router: Router) {
    // this.dbService.PermissionRequest.subscribe(
    //   (obj)  => {
    //     this.Permissiondata=obj;
    //     console.log('check this');
    //     console.log(this.Permissiondata);
    //   });
  }
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):Observable<boolean>| boolean {
        this.dbService.AuthRoute(route.routeConfig.path).then
      (
      (val)=>
      {
        this.UserData=val;
        if(this.UserData!='fail'|| undefined|| null)
        {
        this.loggedInStatus = this.authService.loggedInStatus;
        if(this.loggedInStatus!= false && this.UserData.DataRead==0||null){
            //this.router.navigate(['/loginpage'])
            this.authService.logout();
            return false;
        }
        }
        else{
          this.authService.logout();
            return false;
        }
      },
      (err) => console.error(err)
    )
    return true;
  }

}