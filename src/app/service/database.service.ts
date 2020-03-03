import {Injectable, EventEmitter, OnInit, NgZone} from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import {IPermission } from '../service/user.model';
declare global {
  interface Window {
    RTCPeerConnection: RTCPeerConnection;
    mozRTCPeerConnection: RTCPeerConnection;
    webkitRTCPeerConnection: RTCPeerConnection;
  }
}
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  apiBaseUrl: string = environment.ApiPrefix+"://"+environment.ApiIP+":"+environment.ApiPort;
  apiurl: string = this.apiBaseUrl+environment.ApiAdminPath;
  token:string =environment.token;
  api_ImageUrl:string =this.apiBaseUrl+environment.ApiImagePath;
  header:any =new Headers({'Content-Type':'application/json','No-auth':'True'});
  UserId:any;
  PermissionRequest = new EventEmitter<IPermission>();
  PermissionData:IPermission;
  constructor(private zone: NgZone,private authService: AuthService,private objHttp: HttpClient) {
    this.header.append('authorizationKey',this.token);
   }

   AllMenuList(objInput: {}) {
    let promise = new Promise((resolve, reject) => {
      this.objHttp.post(this.apiurl+'AllMenu',objInput,{headers:this.header})
        .toPromise()
        .then(
          res =>
          {
            resolve(res);
            //resolve(JSON.parse(res.json()));
          },
          reject=>
          {
            resolve('fail');
          }

        );
    });
    return promise;
  }

  GetMenuList(objInput: {}) {
    return this.objHttp.post(this.apiurl+'AllMenu',objInput,{headers:this.header});
  }

  AuthRoute(route)
  {
    this.UserId=this.authService.getUserDetails();
    const objInput={UserId:this.UserId,MenuUrl:route}
    let promise = new Promise((resolve, reject) => {
      this.objHttp.post(this.apiurl+'ValidateRoute',objInput,{headers:this.header})
        .toPromise()
        .then(
          res =>
          {
            console.log(res);
            //this.PermissionData=JSON.parse(res);
            this.PermissionRequest.emit(this.PermissionData);
            resolve(this.PermissionData);
          },
          reject=>
          {
            resolve('fail');
          }

        );
    });
    return promise;
  }

  GetGantryMaster() {
    return this.objHttp.get(this.apiurl+'GantryAll/', {headers:this.header});
  }

  GetLaneMaster(objInput: {}) {
    return this.objHttp.post(this.apiurl+'GetLaneMaster/',objInput, {headers:this.header});
  }

  AddLaneMaster(objInput: {}) {
    return this.objHttp.post(this.apiurl+'GetLaneMaster/',objInput, {headers:this.header});
  }

  UpdateNewEmp(id:any, data: any) {
    console.log('data check for update::',id, data)
    return this.objHttp.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, data, {headers:this.header});
  }

  RoleData()
  {
    return this.objHttp.get(this.apiurl+'RoleDataMaster/', {headers:this.header});
  }
}
